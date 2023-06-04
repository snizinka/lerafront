export const ChatActionTypes = {
    GET_CHATS: 'GET_CHATS',
    GET_CHATS_SUCCESS: 'GET_CHATS_SUCCESS',
    GET_CHATS_ERROR: 'GET_CHATS_ERROR',

    GET_CURRENT_CHAT: 'GET_CURRENT_CHAT',
    GET_CURRENT_CHAT_SUCCESS: 'GET_CURRENT_CHAT_SUCCESS',
    GET_CURRENT_CHAT_ERROR: 'GET_CURRENT_CHAT_ERROR',

    GET_CHAT_MESSAGES: 'GET_CHAT_MESSAGES',
    GET_CHAT_MESSAGES_SUCCESS: 'GET_CHAT_MESSAGES_SUCCESS',
    GET_CHAT_MESSAGES_ERROR: 'GET_CHAT_MESSAGES_ERROR',

    RECEIVED_MESSAGE: 'RECEIVED_MESSAGE'
}

const GetChatsAction = {
    type: ChatActionTypes.GET_CHATS
}

const GetChatsSuccessAction = {
    type: ChatActionTypes.GET_CHATS_SUCCESS,
    payload: []
}

const GetChatsErrorAction = {
    type: ChatActionTypes.GET_CHATS_ERROR,
    payload: []
}


const GetCurrentChatAction = {
    type: ChatActionTypes.GET_CURRENT_CHAT
}

const GetCurrentChatSuccessAction = {
    type: ChatActionTypes.GET_CURRENT_CHAT_SUCCESS,
    payload: []
}

const GetCurrentChatErrorAction = {
    type: ChatActionTypes.GET_CURRENT_CHAT_ERROR,
    payload: []
}


const GetChatMessagesAction = {
    type: ChatActionTypes.GET_CHAT_MESSAGES
}

const GetChatMessagesSuccessAction = {
    type: ChatActionTypes.GET_CHAT_MESSAGES_SUCCESS,
    payload: []
}

const GetChatMessagesErrorAction = {
    type: ChatActionTypes.GET_CHAT_MESSAGES_ERROR,
    payload: []
}


const ReceiveMessageAction = {
    type: ChatActionTypes.RECEIVED_MESSAGE,
    payload: []
}

export const ChatAction = GetChatsAction | GetChatsSuccessAction | GetChatsErrorAction
| GetChatMessagesAction | GetChatMessagesSuccessAction | GetChatMessagesErrorAction
| ReceiveMessageAction
| GetCurrentChatAction | GetCurrentChatSuccessAction | GetCurrentChatErrorAction