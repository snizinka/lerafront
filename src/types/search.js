export const SearchActionTypes = {
    FETCH: 'FETCH',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
}

const FetchAction = {
    type: SearchActionTypes.FETCH
}

const FetchSuccessAction = {
    type: SearchActionTypes.FETCH_SUCCESS,
    payload: []
}

export const SearchAction = FetchAction | FetchSuccessAction