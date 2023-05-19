export const UsersActionTypes = {
    FETCH_USERS: 'FETCH_USERS',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',
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

export const UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
