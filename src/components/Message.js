import React, { useState } from "react"

const Message = ({ id, username, message, created_at, startEditing, removeMessage }) => {
    const [show, setShow] = useState(false)
    return (
        <div onContextMenu={(e) => {
            e.preventDefault()
            setShow(!show)
        }} style={{
            display: 'flex',
            gap: '10px'
        }}>
            <h2>{username}</h2>
            <h3>{message}</h3>
            <h4>{created_at}</h4>

            <div style={{ visibility: show ? 'visible' : 'hidden' }}>
                <button onClick={() => startEditing(id, message)}>Edit</button>
                <button onClick={() => removeMessage(id)}>Delete</button>
            </div>
        </div>
    )
};

export default Message;
