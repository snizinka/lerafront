import { ChatActionTypes } from "../../types/chat"

const initialState = {
    currentChatData: {},
    chats: [],
    messages: [],
    status: '',
    loading: false,
    error: null
}

export default function chatReducer(state = initialState, action) {
    switch (action.type) {
        case ChatActionTypes.GET_CHATS:
            return {
                currentChatData: {},
                chats: state.chats,
                messages: [],
                status: '',
                loading: true,
                error: null
            }

        case ChatActionTypes.GET_CHATS_SUCCESS:
            return {
                currentChatData: state.currentChatData,
                chats: action.payload,
                messages: state.messages,
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.GET_CHATS_ERROR:
            return {
                currentChatData: state.currentChatData,
                chats: [],
                messages: [],
                status: '',
                loading: false,
                error: null
            }


        case ChatActionTypes.GET_CHAT_MESSAGES:
            return {
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: [],
                status: '',
                loading: true,
                error: null
            }

        case ChatActionTypes.GET_CHAT_MESSAGES_SUCCESS:
            return {
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: action.payload,
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.GET_CHAT_MESSAGES_ERROR:
            return {
                currentChatData: state.currentChatData,
                chats: [],
                messages: [],
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.RECEIVED_MESSAGE:
            return {
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: [...state.messages, action.payload],
                status: '',
                loading: false,
                error: null
            }





        case ChatActionTypes.GET_CURRENT_CHAT:
            return {
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: state.messages,
                status: '',
                loading: true,
                error: null
            }

        case ChatActionTypes.GET_CURRENT_CHAT_SUCCESS:
            return {
                currentChatData: action.payload,
                chats: state.chats,
                messages: state.messages,
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.GET_CURRENT_CHAT_ERROR:
            return {
                currentChatData: state.currentChatData,
                chats: [],
                messages: [],
                status: '',
                loading: false,
                error: null
            }


        default:
            return state
    }
}
