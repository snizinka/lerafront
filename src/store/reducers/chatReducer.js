import { ChatActionTypes } from "../../types/chat"

const initialState = {
    isInChat: null,
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
                isInChat: state.isInChat,
                currentChatData: {},
                chats: state.chats,
                messages: [],
                status: '',
                loading: true,
                error: null
            }

        case ChatActionTypes.GET_CHATS_SUCCESS:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: action.payload,
                messages: state.messages,
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.GET_CHATS_ERROR:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: [],
                messages: [],
                status: '',
                loading: false,
                error: null
            }


        case ChatActionTypes.GET_CHAT_MESSAGES:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: [],
                status: '',
                loading: true,
                error: null
            }

        case ChatActionTypes.GET_CHAT_MESSAGES_SUCCESS:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: action.payload,
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.GET_CHAT_MESSAGES_ERROR:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: [],
                messages: [],
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.RECEIVED_MESSAGE:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: [...state.messages, action.payload],
                status: '',
                loading: false,
                error: null
            }





        case ChatActionTypes.GET_CURRENT_CHAT:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: state.messages,
                status: '',
                loading: true,
                error: null
            }

        case ChatActionTypes.GET_CURRENT_CHAT_SUCCESS:
            return {
                isInChat: state.isInChat,
                currentChatData: action.payload,
                chats: state.chats,
                messages: state.messages,
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.GET_CURRENT_CHAT_ERROR:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: [],
                messages: [],
                status: '',
                loading: false,
                error: null
            }




        case ChatActionTypes.EDIT_MESSAGE:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: state.messages,
                status: '',
                loading: true,
                error: null
            }

        case ChatActionTypes.EDIT_MESSAGE_SUCCESS:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: state.messages.map(message => message.msgId === action.payload.msgId ? { ...message, message: action.payload.message } : message),
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.EDIT_MESSAGE_ERROR:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: [],
                messages: [],
                status: '',
                loading: false,
                error: null
            }


        case ChatActionTypes.DELETE_MESSAGE:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: state.messages,
                status: '',
                loading: true,
                error: null
            }

        case ChatActionTypes.DELETE_MESSAGE_SUCCESS:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: state.messages.filter(message => message.msgId !== action.payload),
                status: '',
                loading: false,
                error: null
            }

        case ChatActionTypes.DELETE_MESSAGE_ERROR:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: [],
                messages: [],
                status: '',
                loading: false,
                error: null
            }


        case ChatActionTypes.SET_IN_CHAT:
            return {
                isInChat: action.payload,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: state.messages,
                status: state.status,
                loading: false,
                error: null
            }



        case ChatActionTypes.SET_SEEN_SUCCESS:
            return {
                isInChat: state.isInChat,
                currentChatData: state.currentChatData,
                chats: state.chats,
                messages: state.messages.map(message => message.msgId === action.payload ? { // 0 !== 39 ? .... : ...., isRead : 1 
                    ...message,
                    is_read: 1
                } : message),
                status: state.status,
                loading: false,
                error: null
            }


        default:
            return state
    }
}
