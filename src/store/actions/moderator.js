import { ModeratorActionTypes } from "../../types/moderator";

export const fetchReports = (postTitle, reportId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ModeratorActionTypes.FETCH_REPORTS })
            const data = await fetch('http://localhost:7000/fetchreports', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    postTitle,
                    reportId
                })
            }).then(res => res.json())

            console.log(data)

            dispatch({ type: ModeratorActionTypes.FETCH_REPORTS_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}


export const blockPost = (reportId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ModeratorActionTypes.BLOCK_POST })
            const data = await fetch('http://localhost:7000/blockpost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    reportId
                })
            }).then(res => res.json())

            console.log(data)

            dispatch({ type: ModeratorActionTypes.BLOCK_POST_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}