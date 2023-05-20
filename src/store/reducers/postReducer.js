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
                postsList: state.postsList,
                status: action.payload,
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

        default:
            return state
    }
}
