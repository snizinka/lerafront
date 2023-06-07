import React, { useEffect, useState, useRef } from "react"
import usePostActions from '../hooks/usePostActions'
import axios from "axios"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useNavigate } from "react-router-dom";

const CreateCommunity = () => {
    const navigate = useNavigate()
    const refInput = useRef() // document.getElementById('...')
    const { users } = useTypedSelector(state => state.users)
    const { status, communityDetails } = useTypedSelector(state => state.post)
    const { createCommunity } = usePostActions()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [previewImage, setPreviewImage] = useState('') // BD
    const [previewImageLoad, setPreviewImageLoad] = useState(undefined) // Local

    useEffect(() => {
        if (previewImage !== '' && previewImage !== undefined) {
            setPreviewImageLoad(URL.createObjectURL(previewImage))
        }
    }, [previewImage])

    useEffect(() => {
        if(status === 'Created') {
            navigate(`/community/${communityDetails}`)
        }
    }, [status])

    async function loadPreviewImage() {
        let formData = new FormData()
        formData.append("file", previewImage)

        const { data } = await axios.post('http://localhost:7000/uploadfile', formData)
        console.log(data)
        let copiedImage = data.result.replace(/\\/g, '/')

        return copiedImage
    }

    async function handleCreatePost() {
        if (title !== '' && body !== '' && previewImage !== '') {
            const copiedImage = await loadPreviewImage()

            createCommunity(title, body, copiedImage, users.user_id)
            setTitle('')
            setBody('')
            setPreviewImage('')
            setPreviewImageLoad('')
        }
    }

    return (
        <div>
            <div>
                <p>Community name</p>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                <p>Description</p>
                <input value={body} onChange={(e) => setBody(e.target.value)} type="text" />
                <p>Preview Image</p>
                <input ref={refInput} onChange={(e) => setPreviewImage(e.target.files[0])} style={{ visibility: 'hidden' }} type="file" />
                <button onClick={() => refInput.current.click()} style={{ background: 'green' }}>Select Image</button>

                {previewImageLoad !== undefined ? <div>
                    <button onClick={() => {
                        setPreviewImage('')
                        setPreviewImageLoad(undefined)
                    }}>DELETE</button>
                    <img style={{ height: '100px' }} src={previewImageLoad} alt="" />
                </div> : ''}

                <button onClick={handleCreatePost}>Create Community</button>
            </div>
        </div>
    )
};

export default CreateCommunity;