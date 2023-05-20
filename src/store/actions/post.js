import { PostActionTypes } from "../../types/posts";

export const createPost = (title, bodyText, picture) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PostActionTypes.CREATE_POST })

            const data = await fetch('http://localhost:7000/createpost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    bodyText: bodyText,
                    picture: picture
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: PostActionTypes.CREATE_POST_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}


export const loadPosts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: PostActionTypes.LOAD_POSTS })

            const data = await fetch('http://localhost:7000/loadallposts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({})
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: PostActionTypes.LOAD_POSTS_SUCCESS, payload: data.result })
        } catch (err) {

        }
    }
}
