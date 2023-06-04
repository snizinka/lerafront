import { ChatActionTypes } from "../../types/chat";

export const getPrivateChats = (userId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ChatActionTypes.GET_CHATS })

            const data = await fetch('http://localhost:7000/getallchats', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId,
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: ChatActionTypes.GET_CHATS_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}

export const getPrivateChatMessages = (chatId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ChatActionTypes.GET_CHAT_MESSAGES })

            const data = await fetch('http://localhost:7000/getallchatmessages', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    chatId: chatId,
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: ChatActionTypes.GET_CHAT_MESSAGES_SUCCESS, payload: data.data })
        } catch (err) {

        }
    }
}



export const getChatDetails = (chatId, userId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ChatActionTypes.GET_CURRENT_CHAT })

            const data = await fetch('http://localhost:7000/currentchat', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    chatId: chatId,
                    userId: userId,
                })
            }).then(res => res.json());

            console.log(data)

            dispatch({ type: ChatActionTypes.GET_CURRENT_CHAT_SUCCESS, payload: data.data[0] })
        } catch (err) {

        }
    }
}


export const receivedMessage = (message) => {
    return async (dispatch) => {
        dispatch({ type: ChatActionTypes.RECEIVED_MESSAGE, payload: message })
    }
}