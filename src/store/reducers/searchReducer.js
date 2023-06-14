import { SearchActionTypes } from "../../types/search";

const initialState = {
    posts: [],
    users: [],
    loading: false,
    error: null
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SearchActionTypes.FETCH:
            return {
                posts: state.posts,
                users: state.users,
                loading: true,
                error: null
            }

        case SearchActionTypes.FETCH_SUCCESS:
            return {
                posts: action.payload.posts,
                users: action.payload.users,
                loading: false,
                error: null
            }

        default:
            return state
    }
}
