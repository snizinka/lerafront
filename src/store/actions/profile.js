import { ProfileActionTypes } from "../../types/profile";

export const getProfile = (userId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ProfileActionTypes.FETCH_USER })
            const data = await fetch('http://localhost:7000/profile', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId
                })
            }).then(res => res.json())

            console.log(data)

            dispatch({ type: ProfileActionTypes.FETCH_USER_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}


export const updateProfile = (userId, username, password, userImage) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ProfileActionTypes.UPDATE_PROFILE })
            const data = await fetch('http://localhost:7000/updateprofile', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    username,
                    password,
                    userImage
                })
            }).then(res => res.json())

            console.log(data)

            dispatch({ type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}

export const confirmCode = (userId, code, email, password, image) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ProfileActionTypes.CONFIRM_CODE })
            const data = await fetch('http://localhost:7000/confirmrestemailcode', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    code,
                    email,
                    password,
                    image
                })
            }).then(res => res.json())

            console.log(data)

            dispatch({ type: ProfileActionTypes.CONFIRM_CODE_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}