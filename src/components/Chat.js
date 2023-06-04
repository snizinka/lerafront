import React, { useEffect, useState } from "react"
import useChatActions from '../hooks/useChatActions'
import { useTypedSelector } from "../hooks/useTypedSelector"
import ScrollToBottom from "react-scroll-to-bottom"
import { useNavigate, useParams } from "react-router-dom"
import Message from "./Message"

const Chat = ({ socket }) => {
    const navigate = useNavigate()
    const chatId = useParams()
    const [message, setMessage] = useState('')
    const { users } = useTypedSelector(state => state.users)
    const { chats, messages, currentChatData } = useTypedSelector(state => state.chat)
    const { getPrivateChats, getPrivateChatMessages, getChatDetails, receivedMessage } = useChatActions()

    useEffect(() => {
        getPrivateChats(users.user_id)
    }, [])

    useEffect(() => {
        if (chatId.id !== undefined) {
            getChatDetails(chatId.id, users.user_id)
            getPrivateChatMessages(chatId.id)
        }
    }, [chatId])

    useEffect(() => {
        socket?.on('recieve-message', (data) => {
            receivedMessage(data)
            console.log(data)
        })
    }, [socket])

    function sendMessage() {
        if (Object.keys(currentChatData).length > 0) {
            const messageToSend = {
                chatId: chatId.id,
                userId: users.user_id,
                receiverID: currentChatData.user_id,
                message: message,
                username: users.username
            }

            socket?.emit('send-message', messageToSend)
        }
    }

    return (
        <div>
            <div>
                {
                    chats.map(chat => {
                        return <div onClick={() => navigate(`/chat/${chat.id}`)} key={`contact-${chat.id}`}>
                            <h3>{chat.username}</h3>
                        </div>
                    })
                }
            </div>
            <ScrollToBottom>
                {
                    messages.map(message => {
                        return <Message key={`message-${message.msgId}`} 
                        username={message.username}
                        message={message.message}
                        created_at={message.created_at} />
                    })
                }
            </ScrollToBottom>
            <div>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Chat;
