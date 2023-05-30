import React, { useEffect, useState, useRef } from "react"
import usePostActions from '../hooks/usePostActions'
import axios from "axios"
import { useTypedSelector } from "../hooks/useTypedSelector"
import Post from "./Post"

const CreatePost = () => {
    const refInput = useRef() // document.getElementById('...')
    const { users } = useTypedSelector(state => state.users)
    const { postsList } = useTypedSelector(state => state.post)
    const { createPost, loadAllPosts } = usePostActions()
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [previewImage, setPreviewImage] = useState('') // BD
    const [previewImageLoad, setPreviewImageLoad] = useState(undefined) // Local
    const [postImagesLoad, setPostImagesLoad] = useState([]) // Local
    const [postImages, setPostImages] = useState([]) // BD

    useEffect(() => {
        if (count < 1) {
            setCount(prev => prev + 1)
            loadAllPosts(users.user_id)
        }
    }, [])

    useEffect(() => {
        if (previewImage !== '' && previewImage !== undefined) {
            setPreviewImageLoad(URL.createObjectURL(previewImage))
        }
    }, [previewImage])


    async function loadPreviewImage() {
        let formData = new FormData()
        formData.append("file", previewImage)

        const { data } = await axios.post('http://localhost:7000/uploadfile', formData)
        console.log(data)
        let copiedImage = data.result.replace(/\\/g, '/')

        return copiedImage
    }

    async function loadPostImages() {
        let formData = new FormData() // [images]

        for(let i = 0; i < postImages.length; i++) {
            formData.append("file", postImages[i])
        }

        const { data } = await axios.post('http://localhost:7000/uploadfiles', formData) // [path, path ...]
        let copiedImages = []

        for(let i = 0; i < data.result.length; i++) {
            copiedImages.push(data.result[i].replace(/\\/g, '/'))
        }

        return copiedImages
    }


    async function handleCreatePost() {
        if (title !== '' && body !== '' && previewImage !== '') {
            const copiedImage = await loadPreviewImage()
            const copiedImages = await loadPostImages()

            createPost(title, body, copiedImage, users.user_id, copiedImages)
            setTitle('')
            setBody('')
            setPreviewImage('')
            setPreviewImageLoad('')
        }
    }

    function loadImageIfExists(link) {
        try {
            return <img style={{ height: '100px' }} src={require(`../socialimages/${link}`)} />
        } catch (e) {
            return ''
        }
    }

    function removePostImg(id) {
        const images = postImagesLoad.filter(image => image.id !== id)
        let postImagesList = []

        for (let i = 0; i < postImages.length; i++) {
            if (postImages[i].id !== id) {
                postImagesList.push(postImages[i])
            }
        }
        setPostImagesLoad(images)
        setPostImages(postImagesList)
    }

    return (
        <div>
            <div>
                <p>Title</p>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                <p>Body</p>
                <input value={body} onChange={(e) => setBody(e.target.value)} type="text" />
                <p>Preview Image</p>
                <input ref={refInput} onChange={(e) => setPreviewImage(e.target.files[0])} style={{ visibility: 'hidden' }} type="file" />
                <button onClick={() => refInput.current.click()} style={{ background: 'green' }}>Select Image</button>

                <h2>Images</h2>
                <input onChange={(e) => {
                    setPostImages(e.target.files)
                    console.log(e.target.files)
                    if (e.target.files.length > 0) {
                        let images = [] // {url: File1, id: 0}, {url: File2, id: 1} ....

                        for (let i = 0; i < e.target.files.length; i++) { // File1 File2
                            console.log(e.target.files[i].type.substring(0, e.target.files[i].type.indexOf("/")))
                            images.push({ url: URL.createObjectURL(e.target.files[i]), id: i }) // File1
                        }

                        setPostImagesLoad(images)
                    }
                }} type="file" multiple />

                {previewImageLoad !== undefined ? <div>
                    <button onClick={() => {
                        setPreviewImage('')
                        setPreviewImageLoad(undefined)
                    }}>DELETE</button>
                    <img style={{ height: '100px' }} src={previewImageLoad} alt="" />
                </div> : ''}

                <div>
                    {
                        postImagesLoad.map(image => {
                            return <div key={image.id}>
                                <img style={{ height: '100px' }} src={image.url} alt='' />
                                <button onClick={() => removePostImg(image.id)}>Remove</button>
                            </div>
                        })
                    }
                </div>

                <button onClick={handleCreatePost}>Create Post</button>
            </div>

            <div>
                {
                    postsList.map(post => {
                        return <Post key={post.post_id}
                            title={post.post_title}
                            body={post.post_article}
                            likes={post.likes}
                            didUserLiked={post.didUserLiked}
                            post_id={post.post_id}
                            preview={post.preview_img}
                            loadImageIfExists={loadImageIfExists}
                            postList={post.postImages} />
                    })
                }
            </div>
        </div>
    )
};

export default CreatePost;