import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";
import usePostActions from "../hooks/usePostActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import axios from "axios";

const EditPost = () => {
    const { id } = useParams()
    const refInputPostImage = useRef()
    const { loadPostById, editPost } = usePostActions()
    const { postsList } = useTypedSelector(state => state.post)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [postImages, setPostImages] = useState([])
    const [previewImage, setPrevieImage] = useState('')
    const [replacePic, setReplacePic] = useState([])
    const [replacePicLoad, setReplacePicLoad] = useState([])

    useEffect(() => {
        loadPostById(id)
    }, [id])

    useEffect(() => {
        if (Object.keys(postsList).length > 0) {
            setTitle(postsList.post_title)
            setBody(postsList.post_article)
            setPrevieImage(postsList.preview_img)
            setPostImages(postsList.postImages)
            setReplacePic([])
            setReplacePicLoad([])
        }
    }, [postsList])

    function replacePictureById(id) {
        let images = postImages.filter(image => image.postimage_id !== id)
        setPostImages(images)
    }

    function replaceNewPictureById(id) {
        let images = replacePicLoad.filter(image => image.id !== id)
        setReplacePicLoad(images)

        let imgs = []

        for (let i = 0; i < replacePic.length; i++) {
            if (i !== id) {
                imgs.push(replacePic[i])
            }
        }

        setReplacePic(imgs)
    }

    function LoadImageIfExists({ link, id }) {
        const btnRef = useRef()
        try {
            return (<div style={{ position: 'relative', width: '200px' }}>
                <img style={{ height: '100%', width: '100%' }} src={require(`../socialimages/${link}`)} />
                <button
                    onMouseOver={() => btnRef.current.style.opacity = '0.6'}
                    onMouseOut={() => btnRef.current.style.opacity = '0'}
                    ref={btnRef} // document.getElementById(...)
                    style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, opacity: '0', cursor: 'pointer' }}
                    onClick={() => replacePictureById(id)}
                >X</button>
            </div>)
        } catch (e) {
            return (<></>)
        }
    }

    function LoadNewImageIfExists({ link, id }) {
        const btnRef = useRef()
        try {
            return (<div style={{ position: 'relative', width: '200px' }}>
                <img style={{ height: '100%', width: '100%' }} src={link} />
                <button
                    onMouseOver={() => btnRef.current.style.opacity = '0.6'}
                    onMouseOut={() => btnRef.current.style.opacity = '0'}
                    ref={btnRef}
                    style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, opacity: '0', cursor: 'pointer' }}
                    onClick={() => replaceNewPictureById(id)}
                >X</button>
            </div>)
        } catch (e) {
            return (<></>)
        }
    }

    function LoadPreviewImage({ link }) {
        try {
            return (<img style={{ height: '100px' }} src={require(`../socialimages/${link}`)} />)
        } catch (e) {
            return (<></>)
        }
    }

    async function loadPostImages() {
        let formData = new FormData()

        for(let i = 0; i < postImages.length; i++) {
            formData.append("file", replacePic[i])
        }

        const { data } = await axios.post('http://localhost:7000/uploadfiles', formData)
        let copiedImages = []

        for(let i = 0; i < data.result.length; i++) {
            copiedImages.push(data.result[i].replace(/\\/g, '/'))
        }

        return copiedImages
    }

    return (
        <div>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type='text' value={body} onChange={(e) => setBody(e.target.value)} />
            <input type='file' onChange={(e) => setPrevieImage(e.target.files[0])} />
            <input ref={refInputPostImage} type='file' multiple
                onChange={(e) => {
                    setReplacePic(e.target.files)

                    let imgs = []

                    for (let i = 0; i < e.target.files.length; i++) {
                        imgs.push({ url: URL.createObjectURL(e.target.files[i]), id: i })
                    }

                    setReplacePicLoad(imgs)
                }} />

            <div>
                <LoadPreviewImage link={previewImage} />
            </div>

            <div>
                {
                    postImages.map((img, index) => {
                        return <LoadImageIfExists key={index} link={img.image_link} id={img.postimage_id} />
                    })
                }

                {
                    replacePicLoad.map((img, index) => {
                        return <LoadNewImageIfExists key={index} link={img.url} id={img.id} />
                    })
                }
            </div>

            <button onClick={async () => {
                const newUploadedImages = await loadPostImages()
                editPost(id, title, body, previewImage, postImages, newUploadedImages)
            }}>Edit Post</button>
        </div>
    )
}

export default EditPost;
