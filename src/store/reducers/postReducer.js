import { PostActionTypes } from "../../types/posts"

const initialState = {
    postsList: [],
    status: '',
    loading: false,
    error: null
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case PostActionTypes.CREATE_POST:
            return {
                postsList: state.postsList,
                status: 'Processing',
                loading: true,
                error: null
            }

        case PostActionTypes.CREATE_POST_SUCCESS:
            return {
                postsList: [action.payload.newPost, ...state.postsList],
                status: action.payload.status,
                loading: false,
                error: null
            }

        case PostActionTypes.CREATE_POST_ERROR:
            return {
                postsList: state.postsList,
                status: [],
                loading: false,
                error: null
            }



        case PostActionTypes.LOAD_POSTS:
            return {
                postsList: [],
                status: 'Loading posts ....',
                loading: true,
                error: null
            }

        case PostActionTypes.LOAD_POSTS_SUCCESS:
            return {
                postsList: action.payload,
                status: 'All posts are loaded',
                loading: false,
                error: null
            }

        case PostActionTypes.LOAD_POSTS_ERROR:
            return {
                postsList: [],
                status: 'An error occured',
                loading: false,
                error: null
            }



        case PostActionTypes.LIKE_POST:
            return {
                postsList: state.postsList,
                status: '',
                loading: true,
                error: null
            }

        case PostActionTypes.LIKE_POST_SUCCESS:
            return {
                postsList: state.postsList.map(post => {
                    if (post.post_id !== action.payload.post) {
                        return { ...post }
                    } else {
                        return {
                            ...post,
                            likes: action.payload.status === 'Liked' ? post.likes + 1 : post.likes - 1,
                            didUserLiked: action.payload.status === 'Liked' ? true : false
                        }
                    }
                }),
                status: '',
                loading: false,
                error: null
            }

        case PostActionTypes.LIKE_POST_ERROR:
            return {
                postsList: state.postsList,
                status: 'An error occured',
                loading: false,
                error: null
            }


        case PostActionTypes.LOAD_EDIT_POST:
            return {
                postsList: { },
                status: 'Loading ...',
                loading: true,
                error: null
            }

        case PostActionTypes.LOAD_EDIT_POST_SUCCESS:
            return {
                postsList: action.payload,
                status: 'Finished',
                loading: false,
                error: null
            }

        case PostActionTypes.LOAD_EDIT_POST_ERROR:
            return {
                postsList: state.postsList,
                status: [],
                loading: false,
                error: null
            }


        default:
            return state
    }
}
