import React, { useEffect, useRef, useState } from "react"
import useProfileActions from '../hooks/useProfileActions'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const EditProfile = () => {
    const navigate = useNavigate()
    const fileRef = useRef()
    const { users } = useTypedSelector(state => state.users)
    const { profile, validationStatus } = useTypedSelector(state => state.profile)
    const { getProfile, updateProfile, confirmCode } = useProfileActions()
    const [confirmationCode, setConfirmationCode] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [loadImage, setLoadImage] = useState(undefined)
    const [loadedImage, setLoadedImage] = useState(undefined)
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        if (users.user_id !== undefined) {
            getProfile(users.user_id)
        }
    }, [])

    useEffect(() => {
        setEmail(profile.username)
        setOldPassword(profile.password)
        setImage(profile.image)
    }, [profile])

    useEffect(() => {
        if (loadImage !== undefined) {
            setLoadedImage(URL.createObjectURL(loadImage))
        }
    }, [loadImage])

    useEffect(() => {
        if (validationStatus === 'Confirmed') {
            navigate('/editprofile')
        }
    }, [validationStatus])

    function LoadPreviewImage({ link }) {
        try {
            return (<img style={{ height: '100px' }} src={require(`../socialimages/${link}`)} />)
        } catch (e) {
            return (<></>)
        }
    }

    return (
        <div>
            {
                validationStatus !== '' && validationStatus !== 'Confirmed' && validationStatus !== undefined && validationStatus !== 'Valid' ? <div>
                    <h1>Confirmation Code</h1>
                    <input value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} placeholder="Code" />
                    <button onClick={async () => {
                        let copiedImage = image
                        if (loadImage !== undefined) {
                            let formData = new FormData()
                            formData.append("file", loadImage)
                            const { data } = await axios.post('http://localhost:7000/uploadfile', formData)
                            copiedImage = data.result.replace(/\\/g, '/')
                        }
                        confirmCode(users.user_id, confirmationCode, email, oldPassword, copiedImage)
                    }}>Confirm</button>
                </div> : <div>
                    {loadedImage === undefined ? <LoadPreviewImage link={image} /> : <img src={loadedImage} />}
                    <button onClick={() => fileRef.current.click()}>Change</button>

                    <input ref={fileRef} onChange={(e) => setLoadImage(e.target.files[0])} type="file" style={{ visibility: 'hidden' }} />

                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button onClick={() => updateProfile(users.user_id, email, oldPassword, image)}>UPDATE</button>
                </div>
            }
        </div>
    )
}

export default EditProfile;
