export const NotificationsActionTypes = {
    FETCH: 'FETCH_REPORTS',
    FETCH_SUCCESS: 'FETCH_REPORTS_SUCCESS'
}

const FetchAction = {
    type: NotificationsActionTypes.FETCH
}

const FetchSuccessAction = {
    type: NotificationsActionTypes.FETCH_SUCCESS,
    payload: []
}

export const NotificationAction = FetchAction | FetchSuccessAction