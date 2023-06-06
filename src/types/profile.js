export const ProfileActionTypes = {
    FETCH_USER: 'FETCH_USER',
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR: 'FETCH_USER_ERROR',

    UPDATE_PROFILE: 'UPDATE_PROFILE',
    UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_ERROR: 'UPDATE_PROFILE_ERROR',

    CONFIRM_CODE: 'CONFIRM_CODE',
    CONFIRM_CODE_SUCCESS: 'CONFIRM_CODE_SUCCESS',
    CONFIRM_CODE_ERROR: 'CONFIRM_CODE_ERROR',
}

const FetchUserAction = {
    type: ProfileActionTypes.FETCH_USER
}

const FetchUserSuccessAction = {
    type: ProfileActionTypes.FETCH_USER_SUCCESS,
    payload: []
};

const FetchUserErrorAction = {
    type: ProfileActionTypes.FETCH_USER_ERROR,
    payload: []
}


const UpdateProfileAction = {
    type: ProfileActionTypes.UPDATE_PROFILE
}

const UpdateProfileSuccessAction = {
    type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS,
    payload: []
};

const UpdateProfileErrorAction = {
    type: ProfileActionTypes.UPDATE_PROFILE_ERROR,
    payload: []
}


const ConfirmCodeAction = {
    type: ProfileActionTypes.CONFIRM_CODE
}

const ConfirmCodeSuccessAction = {
    type: ProfileActionTypes.CONFIRM_CODE_SUCCESS,
    payload: []
}

const ConfirmCodeErrorAction = {
    type: ProfileActionTypes.CONFIRM_CODE_ERROR,
    payload: []
}



export const ProfileAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction
    | UpdateProfileAction | UpdateProfileSuccessAction | UpdateProfileErrorAction
    | ConfirmCodeAction | ConfirmCodeSuccessAction | ConfirmCodeErrorAction