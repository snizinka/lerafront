import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Message = ({ id, username, message, created_at, startEditing, removeMessage, is_read, socket, user_id }) => {
    const { users } = useTypedSelector(state => state.users)
    const [show, setShow] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    useEffect(() => {
        if (inView === true && user_id !== users.user_id) {
            socket.emit('set-seen-message', {
                userId: user_id,
                receiverID: users.user_id,
                messageId: id
            })
        }
    }, [inView])

    return (
        <div ref={ref} onContextMenu={(e) => {
            e.preventDefault()
            setShow(!show)
        }} style={{
            display: 'flex',
            columnGap: '10px',
            background: is_read === 1 ? 'transparent' : user_id !== users.user_id ? 'lightgray' : 'transparent'
        }}>
            <h2>{username}</h2>
            <h3>{message}</h3>
            <h4>{created_at}</h4>

            <div style={{ visibility: show ? 'visible' : 'hidden' }}>
                <button onClick={() => startEditing(id, message)}>Edit</button>
                <button onClick={() => removeMessage(id)}>Delete</button>
            </div>
            <h4>{is_read ? users.user_id === user_id ? 'Seen' : '' : 'Unread'}</h4>
        </div>
    )
}

export default Message;
