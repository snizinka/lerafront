import { NotificationsActionTypes } from "../../types/notification";

const initialState = {
    chatNotifications: [],
    contactNotifications: [],
    reportNotifications: [],
    loading: false,
    error: null
}

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case NotificationsActionTypes.FETCH:
            return {
                chatNotifications: [],
                contactNotifications: [],
                reportNotifications: [],
                loading: true,
                error: null
            }

        case NotificationsActionTypes.FETCH_SUCCESS:
            return {
                chatNotifications: action.payload.messages,
                contactNotifications: action.payload.contacts,
                reportNotifications: action.payload.reports,
                loading: false,
                error: null
            }

        default:
            return state
    }
}
