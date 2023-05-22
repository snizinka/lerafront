import React, { useEffect, useState } from "react"
import useUserActions from "../hooks/useUserActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()
    const { validationStatus, users } = useTypedSelector(i => i.users)
    const { signUpUser } = useUserActions()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    function validateData() {
        if(login.match('[a-z-0-9-A-Z]{4}') && password === confirm && password.match('[a-z]{6}')) {
            signUpUser(login, password)
        }
    }

    useEffect(() => {
        if (users.insertId !== undefined) {
            navigate('/login')
        }
    }, [users])

    return (
        <div>
            <p>Login</p>
            <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" />
            <h4 style={{visibility: validationStatus === true ? 'hidden' : 'visible'}} >Username already exists</h4>

            <p>Pass</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" />

            <button onClick={validateData}>Sign up</button>
        </div>
    )
};

export default SignUp;
