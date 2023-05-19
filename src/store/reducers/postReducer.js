import { PostActionTypes } from "../../types/posts"

const initialState = {
    status: '',
    loading: false,
    error: null
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case PostActionTypes.CREATE_POST:
            return {
                status: [],
                loading: true,
                error: null
            }

        case PostActionTypes.CREATE_POST_SUCCESS:
            return {
                status: action.payload,
                loading: false,
                error: null
            }

        case PostActionTypes.CREATE_POST_ERROR:
            return {
                status: [],
                loading: false,
                error: null
            }

        default:
            return state
    }
}
