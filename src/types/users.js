export const UsersActionTypes = {
    FETCH_USERS: 'FETCH_USERS',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',

    SIGN_UP_USER: 'SIGN_UP_USER',
    SIGN_UP_USER_SUCCESS: 'SIGN_UP_USER_SUCCESS',
    SIGN_UP_USER_ERROR: 'SIGN_UP_USER_ERROR',

    LOGIN_USER: 'LOGIN_USER',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR: 'LOGIN_USER_ERROR',

    SIGNOUT_USER: 'SIGNOUT_USER',

    CONFIRM_CODE: 'CONFIRM_CODE',
    CONFIRM_CODE_SUCCESS: 'CONFIRM_CODE_SUCCESS',
    CONFIRM_CODE_ERROR: 'CONFIRM_CODE_ERROR',
}

const FetchUsersAction = {
    type: UsersActionTypes.FETCH_USERS
}

const FetchUsersSuccessAction = {
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: []
};

const FetchUsersErrorAction = {
    type: UsersActionTypes.FETCH_USERS_ERROR,
    payload: []
}


const SignUpUsersAction = {
    type: UsersActionTypes.SIGN_UP_USER
}

const SignUpUsersSuccessAction = {
    type: UsersActionTypes.SIGN_UP_USER_SUCCESS,
    payload: []
};

const SignUpUsersErrorAction = {
    type: UsersActionTypes.SIGN_UP_USER_ERROR,
    payload: []
}


const LoginUsersAction = {
    type: UsersActionTypes.LOGIN_USER
}

const LoginUsersSuccessAction = {
    type: UsersActionTypes.LOGIN_USER_SUCCESS,
    payload: []
};

const LoginUsersErrorAction = {
    type: UsersActionTypes.LOGIN_USER_ERROR,
    payload: []
}

const ConfirmCodeAction = {
    type: UsersActionTypes.CONFIRM_CODE
}

const ConfirmCodeSuccessAction = {
    type: UsersActionTypes.CONFIRM_CODE_SUCCESS,
    payload: []
};

const ConfirmCodeErrorAction = {
    type: UsersActionTypes.CONFIRM_CODE_ERROR,
    payload: []
}

const SignOutUserAction = {
    type: UsersActionTypes.SIGNOUT_USER,
}

export const UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
| SignUpUsersAction | SignUpUsersSuccessAction | SignUpUsersErrorAction 
| LoginUsersAction | LoginUsersSuccessAction | LoginUsersErrorAction
| SignOutUserAction
| ConfirmCodeAction | ConfirmCodeSuccessAction | ConfirmCodeErrorAction