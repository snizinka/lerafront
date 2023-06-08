import { ProfileActionTypes } from "../../types/profile";

const initialState = {
    validationStatus: undefined,
    profile: {},
    loading: false,
    error: null
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ProfileActionTypes.FETCH_USER:
            return {
                validationStatus: state.validationStatus,
                profile: {},
                loading: true,
                error: null
            }

        case ProfileActionTypes.FETCH_USER_SUCCESS:
            return {
                validationStatus: state.validationStatus,
                profile: action.payload,
                loading: false,
                error: null
            }

        case ProfileActionTypes.FETCH_USER_ERROR:
            return {
                validationStatus: state.validationStatus,
                profile: {},
                loading: false,
                error: null
            }




        case ProfileActionTypes.UPDATE_PROFILE:
            return {
                validationStatus: state.validationStatus,
                profile: state.profile,
                loading: true,
                error: null
            }

        case ProfileActionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                validationStatus: action.payload.isUpdated ? 'Valid' : action.payload.confirmationCode,
                profile: state.profile,
                loading: false,
                error: null
            }

        case ProfileActionTypes.UPDATE_PROFILE_ERROR:
            return {
                validationStatus: state.validationStatus,
                profile: {},
                loading: false,
                error: null
            }


        case ProfileActionTypes.CONFIRM_CODE:
            return {
                validationStatus: state.validationStatus,
                profile: state.profile,
                loading: true,
                error: null
            }

        case ProfileActionTypes.CONFIRM_CODE_SUCCESS:
            return {
                validationStatus: action.payload === 'Confirmed' ? 'Confirmed' : 'Faild',
                profile: state.profile,
                loading: false,
                error: null
            }

        case ProfileActionTypes.CONFIRM_CODE_ERROR:
            return {
                validationStatus: state.validationStatus,
                profile: {},
                loading: false,
                error: null
            }



        case ProfileActionTypes.FOLLOW_USER:
            return {
                validationStatus: state.validationStatus,
                profile: state.profile,
                loading: true,
                error: null
            }

        case ProfileActionTypes.FOLLOW_USER_SUCCESS:
            return {
                validationStatus: state.validationStatus,
                profile: { ...state.profile, isFollowing: action.payload },
                loading: false,
                error: null
            }

        case ProfileActionTypes.FOLLOW_USER_ERROR:
            return {
                validationStatus: state.validationStatus,
                profile: {},
                loading: false,
                error: null
            }



        default:
            return state
    }
}
