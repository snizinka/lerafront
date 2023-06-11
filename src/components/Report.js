import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import useModeratorActions from "../hooks/useModeratorActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const Report = () => {
    const reportId = useParams()
    const { fetchReports, blockPost } = useModeratorActions()
    const { reports } = useTypedSelector(state => state.moderator)

    useEffect(() => {
        fetchReports('', reportId.id)
    }, [reportId])

    function loadImageIfExists(link) {
        try {
            return <img style={{ height: '100px' }} src={require(`../socialimages/${link}`)} />
        } catch (e) {
            return ''
        }
    }

    return (
        <div>
            {
                reports.map(report => {
                    return <div style={{ display: 'flex' }}>
                        <h1>{report.post_title}</h1>
                        <h2>{report.reportText}</h2>
                        <h3>{report.created_at}</h3>
                        <h4>{report.reportStatus}</h4>
                        <button onClick={
                            () => blockPost(reportId.id)}>{
                                report.reportStatus === 'pending' ? 'Block' : report.reportStatus === 'blocked' ? 'Unblock' : 'Block'
                            }</button>

                        <div>
                            <h3>{report.post_title}</h3>
                            <h3>{report.post_article}</h3>
                            {loadImageIfExists(report.preview_img)}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Report