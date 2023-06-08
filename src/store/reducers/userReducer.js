import { UsersActionTypes } from "../../types/users";

const initialState = {
    searchedUsers: [],
    validationStatus: true,
    users: JSON.parse(localStorage.getItem('authorizeduser') || '{}'),
    loading: false,
    error: null
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return {
                searchedUsers: [],
                validationStatus: state.validationStatus,
                users: [],
                loading: true,
                error: null
            }

        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {
                searchedUsers: [],
                validationStatus: state.validationStatus,
                users: action.payload,
                loading: false,
                error: null
            }

        case UsersActionTypes.FETCH_USERS_ERROR:
            return {
                searchedUsers: [],
                validationStatus: state.validationStatus,
                users: [],
                loading: false,
                error: null
            }


        case UsersActionTypes.SIGN_UP_USER:
            return {
                searchedUsers: [],
                validationStatus: true,
                users: {},
                loading: true,
                error: null
            }

        case UsersActionTypes.SIGN_UP_USER_SUCCESS:
            return {
                searchedUsers: [],
                validationStatus: action.payload.validationStatus,
                users: action.payload.newId,
                loading: false,
                error: null
            }

        case UsersActionTypes.SIGN_UP_USER_ERROR:
            return {
                searchedUsers: [],
                validationStatus: false,
                users: {},
                loading: false,
                error: 'Stalasia pomilka'
            }



        case UsersActionTypes.LOGIN_USER:
            return {
                searchedUsers: [],
                validationStatus: true,
                users: {},
                loading: true,
                error: null
            }

        case UsersActionTypes.LOGIN_USER_SUCCESS:
            return {
                searchedUsers: [],
                validationStatus: action.payload.validationStatus,
                users: action.payload.user,
                loading: false,
                error: null
            }

        case UsersActionTypes.LOGIN_USER_ERROR:
            return {
                searchedUsers: [],
                validationStatus: false,
                users: {},
                loading: false,
                error: 'Stalasia pomilka'
            }


        case UsersActionTypes.CONFIRM_CODE:
            return {
                searchedUsers: [],
                validationStatus: true,
                users: {},
                loading: true,
                error: null
            }

        case UsersActionTypes.CONFIRM_CODE_SUCCESS:
            return {
                searchedUsers: [],
                validationStatus: action.payload,
                users: {},
                loading: false,
                error: null
            }

        case UsersActionTypes.CONFIRM_CODE_ERROR:
            return {
                searchedUsers: [],
                validationStatus: false,
                users: {},
                loading: false,
                error: 'Stalasia pomilka'
            }

        case UsersActionTypes.SIGNOUT_USER:
            return {
                searchedUsers: [],
                validationStatus: true,
                users: {},
                loading: false,
                error: false
            }





        case UsersActionTypes.SEARCH_FOR_USERS:
            return {
                searchedUsers: [],
                validationStatus: true,
                users: state.users,
                loading: true,
                error: null
            }

        case UsersActionTypes.SEARCH_FOR_USERS_SUCCESS:
            return {
                searchedUsers: action.payload,
                validationStatus: true,
                users: state.users,
                loading: false,
                error: null
            }

        case UsersActionTypes.SEARCH_FOR_USERS_ERROR:
            return {
                searchedUsers: [],
                validationStatus: false,
                users: {},
                loading: false,
                error: 'Stalasia pomilka'
            }

        default:
            return state
    }
}
