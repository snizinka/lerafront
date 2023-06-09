import { UsersActionTypes } from "../../types/users";

export const userData = (login, password) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UsersActionTypes.FETCH_USERS })
            const data = await fetch('http://localhost:7000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    password: password
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}


export const signUpUser = (login, password) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UsersActionTypes.SIGN_UP_USER })
            const data = await fetch('http://localhost:7000/signupuser', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    password: password
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: UsersActionTypes.SIGN_UP_USER_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}

export const signInUser = (login, password) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UsersActionTypes.LOGIN_USER })
            const data = await fetch('http://localhost:7000/authorize', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    password: password
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: UsersActionTypes.LOGIN_USER_SUCCESS, payload: data.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export const checkConfirmationCode = (code) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UsersActionTypes.CONFIRM_CODE })
            const data = await fetch('http://localhost:7000/confirmregistration', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    code: code
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: UsersActionTypes.CONFIRM_CODE_SUCCESS, payload: data.data })
        } catch (err) {
            console.log(err)
        }
    }
}


export const signOut = () => {
    return async (dispatch) => {
        localStorage.removeItem('authorizeduser')
        dispatch({ type: UsersActionTypes.SIGNOUT_USER })
    }
}


export const findUsers = (username) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UsersActionTypes.SEARCH_FOR_USERS })
            const data = await fetch('http://localhost:7000/findusers', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: UsersActionTypes.SEARCH_FOR_USERS_SUCCESS, payload: data.data })
        } catch (err) {
            console.log(err)
        }
    }
}