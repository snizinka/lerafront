import { ModeratorActionTypes } from "../../types/moderator";

const initialState = {
    validationStatus: undefined,
    reports: [],
    processingStatus: 'None',
    loading: false,
    error: null
}

export default function moderatorReducer(state = initialState, action) {
    switch (action.type) {
        case ModeratorActionTypes.FETCH_REPORTS:
            return {
                validationStatus: undefined,
                reports: [],
                processingStatus: 'Fetching',
                loading: true,
                error: null
            }

        case ModeratorActionTypes.FETCH_REPORTS_SUCCESS:
            return {
                validationStatus: undefined,
                reports: action.payload,
                processingStatus: 'Fetched',
                loading: false,
                error: null
            }

        case ModeratorActionTypes.FETCH_REPORTS_ERROR:
            return {
                validationStatus: undefined,
                reports: [],
                processingStatus: 'Fetching',
                loading: false,
                error: null
            }





        case ModeratorActionTypes.BLOCK_POST:
            return {
                validationStatus: undefined,
                reports: state.reports,
                processingStatus: 'Handling',
                loading: true,
                error: null
            }

        case ModeratorActionTypes.BLOCK_POST_SUCCESS:
            return {
                validationStatus: undefined,
                reports: state.reports.map(report => { return { ...report, reportStatus: action.payload === true ? 'unblocked' : 'blocked' } }),
                processingStatus: 'Resolved',
                loading: false,
                error: null
            }

        case ModeratorActionTypes.BLOCK_POST_ERROR:
            return {
                validationStatus: undefined,
                reports: [],
                processingStatus: 'Fetching',
                loading: false,
                error: null
            }


        default:
            return state
    }
}
