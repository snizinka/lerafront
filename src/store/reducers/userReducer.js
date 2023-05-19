import { UsersActionTypes } from "../../types/users";

const initialState = {
    users: [],
    loading: false,
    error: null
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return {
                users: [],
                loading: true,
                error: null
            }

        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: null
            }

        case UsersActionTypes.FETCH_USERS_ERROR:
            return {
                users: [],
                loading: false,
                error: null
            }

        default:
            return state
    }
}
