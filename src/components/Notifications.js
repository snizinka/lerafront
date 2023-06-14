import React from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { Link } from "react-router-dom"

const Notifications = () => {
    const { chatNotifications, reportNotifications, contactNotifications } = useTypedSelector(state => state.notification)

    return (
        <div>
            <h1>{chatNotifications.length + reportNotifications.length + contactNotifications.length}</h1>
            <h1>CHAT NOTS</h1>
            {
                chatNotifications?.map(chatNotify => {
                    return <div style={{ display: 'flex' }}>
                        <h1>{chatNotify.username}</h1>
                        <h2>{chatNotify.message}</h2>
                        <h3>{chatNotify.created_at}</h3>
                    </div>
                })
            }

            <h1>REPORT NOTS</h1>
            {
                reportNotifications?.map(report => {
                    return <div style={{ display: 'flex' }}>
                        <h1>{report.post_title}</h1>
                        <h2>{report.reportStatus}</h2>
                    </div>
                })
            }

            <h1>CONTACTS NOTS</h1>
            {
                contactNotifications.map(contact => {
                    return <div style={{ display: 'flex' }}>
                        <a href={`/profile/${contact.user_id}`}><h2>{contact.username}</h2></a>
                    </div>
                })
            }
        </div>
    )
}

export default Notifications
