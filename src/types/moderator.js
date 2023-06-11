export const ModeratorActionTypes = {
    FETCH_REPORTS: 'FETCH_REPORTS',
    FETCH_REPORTS_SUCCESS: 'FETCH_REPORTS_SUCCESS',
    FETCH_REPORTS_ERROR: 'FETCH_REPORTS_ERROR',

    BLOCK_POST: 'BLOCK_POST',
    BLOCK_POST_SUCCESS: 'BLOCK_POST_SUCCESS',
    BLOCK_POST_ERROR: 'BLOCK_POST_ERROR',
}

const FetchReportsAction = {
    type: ModeratorActionTypes.FETCH_REPORTS
}

const FetchReportsSuccessAction = {
    type: ModeratorActionTypes.FETCH_REPORTS_SUCCESS,
    payload: []
}

const FetchReportsErrorAction = {
    type: ModeratorActionTypes.FETCH_REPORTS_ERROR,
    payload: []
}


const BlockPostAction = {
    type: ModeratorActionTypes.BLOCK_POST
}

const BlockPostSuccessAction = {
    type: ModeratorActionTypes.BLOCK_POST_SUCCESS,
    payload: []
}

const BlockPostErrorAction = {
    type: ModeratorActionTypes.BLOCK_POST_ERROR,
    payload: []
}


export const ModeratorAction = FetchReportsAction | FetchReportsSuccessAction | FetchReportsErrorAction
    | BlockPostAction | BlockPostSuccessAction | BlockPostErrorAction