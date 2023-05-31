import { PostActionTypes } from "../../types/posts";

export const createPost = (title, bodyText, picture, userId, postImages) => {
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
                    picture: picture,
                    userId: userId,
                    postImages: postImages
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: PostActionTypes.CREATE_POST_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}

export const editPost = (postId, title, bodyText, picture, postImages, newPostImages) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PostActionTypes.EDIT_POST })

            const data = await fetch('http://localhost:7000/editpost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    postId: postId,
                    title: title,
                    bodyText: bodyText,
                    picture: picture,
                    postImages: postImages,
                    newPostImages: newPostImages
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: PostActionTypes.EDIT_POST_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}

export const loadPostById = (postId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PostActionTypes.LOAD_EDIT_POST })

            const data = await fetch('http://localhost:7000/loadeditpost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    postId: postId
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: PostActionTypes.LOAD_EDIT_POST_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}

export const loadAllPosts = (userId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PostActionTypes.LOAD_POSTS })

            const data = await fetch('http://localhost:7000/loadposts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: PostActionTypes.LOAD_POSTS_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}

export const emitLike = (userId, postId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PostActionTypes.LIKE_POST })

            const data = await fetch('http://localhost:7000/likepost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId,
                    postId: postId,
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: PostActionTypes.LIKE_POST_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}