import React, { useEffect, useState } from "react"
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Link } from "react-router-dom"
import useUserActions from "../hooks/useUserActions"

const SearchForUsers = () => {
    const { searchedUsers } = useTypedSelector(state => state.users)
    const { findUsers } = useUserActions()
    const [search, setSearch] = useState('')

    useEffect(() => {
        findUsers(search)
    }, [search])

    function loadImageIfExists(link) {
        try {
            return <img style={{ height: '100px' }} src={require(`../socialimages/${link}`)} />
        } catch (e) {
            return ''
        }
    }

    return (
        <div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {
                    searchedUsers.length > 0 ? searchedUsers?.map(user => {
                        return <div style={{ display: 'flex' }}>
                            {loadImageIfExists(user.image)}
                            <Link to={`/profile/${user.user_id}`}><h2>{user.username}</h2></Link>
                        </div>
                    }) : ''
                }
            </div>
        </div>
    )
}

export default SearchForUsers
