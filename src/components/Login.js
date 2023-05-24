import React, { useEffect, useState } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector";
import useUserActions from "../hooks/useUserActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const { validationStatus, users } = useTypedSelector(i => i.users)
    const { signInUser } = useUserActions()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function handleAuth() {
        signInUser(login, password)
    }

    useEffect(() => {
        console.log(users)
        if (users?.user_id !== undefined) {
            localStorage.setItem('authorizeduser', JSON.stringify(users));
            navigate('/posts')
        }
    }, [users])

    return (
        <div>
            <h1>{users?.user_id}</h1>
            <p>Login</p>
            <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" />

            <p>Pass</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

            <h4 style={{visibility: validationStatus === true ? 'hidden' : 'visible', color: 'red'}}>Incorrect login or password</h4>
            <button onClick={handleAuth}>Sign in</button>
        </div>
    )
}

export default Login;
