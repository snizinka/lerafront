import React from "react"
import { useNavigate } from "react-router-dom";
import useUserActions from "../hooks/useUserActions";

const Posts = () => {
    const navigate = useNavigate()
    const { signOut } = useUserActions()

    function signOutUser () {
        signOut()
        navigate('/login')
    }

    return (
        <div>
            <button onClick={signOutUser}>Sign out</button>
        </div>
    )
}

export default Posts;
