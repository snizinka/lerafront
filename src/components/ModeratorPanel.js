import React, { useEffect, useState } from "react"
import useModeratorActions from '../hooks/useModeratorActions'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { Link } from "react-router-dom"

const ModeratorPanel = () => {
    const { fetchReports } = useModeratorActions()
    const { reports } = useTypedSelector(state => state.moderator)
    const [searchTitle, setSearchTitle] = useState('')

    useEffect(() => {
        fetchReports(searchTitle, undefined)
    }, [searchTitle])

    return (
        <div>
            <div>
                <input type="text" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />

                <div>
                    {
                        reports.map(report => {
                            return <Link to={`/report/${report.id}`}>
                                <div style={{ display: 'flex' }}>
                                    <h1>{report.post_title}</h1>
                                    <h2>{report.reportText}</h2>
                                    <h3>{report.created_at}</h3>
                                    <h4>{report.reportStatus}</h4>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ModeratorPanel
