import { SearchActionTypes } from "../../types/search";

export const fetchSearch = (searchString) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SearchActionTypes.FETCH })
            const data = await fetch('http://localhost:7000/search', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    searchString
                })
            }).then(res => res.json())

            console.log(data)

            dispatch({ type: SearchActionTypes.FETCH_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}