import React, { useState } from "react"
import { useTypedSelector } from '../hooks/useTypedSelector'
import usePostActions from '../hooks/usePostActions'
import axios from "axios"

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [images, setImages] = useState('')

    const { status } = useTypedSelector(state => state.post)
    const { createPost } = usePostActions()

    return (
        <div>
            <h1>{status}</h1>
            <p>Title</p>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
            <p>Body</p>
            <input value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder="Body text" />
            <p>Img</p>
            <input type="file" onChange={(e) => setImages(e.target.files[0])} />

            <button onClick={async () => {
                if (title !== '' && body !== '' && images !== '') {
                    let formData = new FormData()
                    formData.append("file", images)

                    const { data } = await axios.post('http://localhost:7000/uploadfile', formData)
                    console.log(data)
                    let copiedImage = data.result.replace(/\\/g, '/')

                    createPost(title, body, copiedImage)
                }
            }}>Create post</button>
        </div>
    )
}

export default CreatePost;
