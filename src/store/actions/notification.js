import { NotificationsActionTypes } from "../../types/notification";

export const fetchNotifications = (userId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: NotificationsActionTypes.FETCH })
            const data = await fetch('http://localhost:7000/getnotifications', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId
                })
            }).then(res => res.json())

            console.log(data)

            dispatch({ type: NotificationsActionTypes.FETCH_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}