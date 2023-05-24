import React, { useEffect, useState } from "react"
import usePostActions from '../hooks/usePostActions'
import axios from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Post from "./Post";

const CreatePost = () => {
    const { users } = useTypedSelector(state => state.users)
    const { postsList } = useTypedSelector(state => state.post)
    const { createPost, loadAllPosts } = usePostActions()
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [previewImage, setPreviewImage] = useState('') // BD
    const [previewImageLoad, setPreviewImageLoad] = useState(undefined) // Local

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

    async function handleCreatePost() {
        if (title !== '' && body !== '' && previewImage !== '') {
            let formData = new FormData()
            formData.append("file", previewImage)

            const { data } = await axios.post('http://localhost:7000/uploadfile', formData)
            console.log(data)
            let copiedImage = data.result.replace(/\\/g, '/')

            createPost(title, body, copiedImage, users.user_id)
            setTitle('')
            setBody('')
            setPreviewImage('')
            setPreviewImageLoad('')
        }
    }

    function loadImageIfExists(link) {
        try {
            return <img src={require(`../socialimages/${link}`)} />
        } catch (e) {
            return ''
        }
    }

    return (
        <div>
            <div>
                <p>Title</p>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                <p>Body</p>
                <input value={body} onChange={(e) => setBody(e.target.value)} type="text" />
                <p>Preview Image</p>
                <input onChange={(e) => setPreviewImage(e.target.files[0])} type="file" />

                {previewImageLoad !== undefined ? <div>
                    <button onClick={() => {
                        setPreviewImage('')
                        setPreviewImageLoad(undefined)
                    }}>DELETE</button>
                    <img style={{ height: '150px' }} src={previewImageLoad} alt="" />
                </div> : ''}

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
                            loadImageIfExists={loadImageIfExists} />
                    })
                }
            </div>
        </div>
    )
};

export default CreatePost;
