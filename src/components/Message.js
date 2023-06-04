import React, { useState } from "react"

const Message = ({ username, message, created_at }) => {
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
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
};

export default Message;
