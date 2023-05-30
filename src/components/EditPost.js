import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";
import usePostActions from "../hooks/usePostActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const EditPost = () => {
    const { id } = useParams()
    const refInputPostImage = useRef()
    const { loadPostById } = usePostActions()
    const { postsList } = useTypedSelector(state => state.post)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [postImages, setPostImages] = useState([])
    const [previewImage, setPrevieImage] = useState('')
    const [replacePic, setReplacePic] = useState('')

    useEffect(() => {
        loadPostById(id)
    }, [id])

    useEffect(() => {
        if (Object.keys(postsList).length > 0) {
            setTitle(postsList.post_title)
            setBody(postsList.post_article)
            setPrevieImage(postsList.preview_img)
            setPostImages(postsList.postImages)
        }
    }, [postsList])

    function replacePictureById(id) {
        console.log(id)
        let images = postImages.map(image => image.postimage_id !== id)
        setPostImages(images)
    }

    function loadImageIfExists(link, id) {
        try {
            return <img onClick={() => replacePictureById(id)} style={{ height: '100px' }} src={require(`../socialimages/${link}`)} />
        } catch (e) {
            return ''
        }
    }

    return (
        <div>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type='text' value={body} onChange={(e) => setBody(e.target.value)} />
            <input type='file' onChange={(e) => setPrevieImage(e.target.files[0])} />
            <input type='file' multiple onChange={(e) => setPostImages(e.target.files)} />
            <input ref={refInputPostImage} style={{ visibility: 'hidden' }} type='file'
                onChange={(e) => {
                    setReplacePic(e.target.files[0])
                }} />

            <div>
                {loadImageIfExists(previewImage)}
            </div>

            <div>
                {
                    postImages.map(img => {
                        return loadImageIfExists(img.image_link, img.postimage_id)
                    })
                }
            </div>
        </div>
    )
}

export default EditPost;
