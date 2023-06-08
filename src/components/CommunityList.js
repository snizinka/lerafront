import React, { useEffect, useState } from "react"
import usePostActions from '../hooks/usePostActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Link } from "react-router-dom"

const CommunityList = () => {
    const { communityDetails } = useTypedSelector(state => state.post)
    const { searchForCommunities } = usePostActions()
    const [search, setSearch] = useState('')

    useEffect(() => {
        searchForCommunities(search)
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
                    communityDetails.length > 0 ? communityDetails?.map(community => {
                        return <div style={{ display: 'flex' }}>
                            {loadImageIfExists(community.image)}
                            <Link to={`/community/${community.id}`}><h2>{community.community_name}</h2></Link>
                        </div>
                    }) : ''
                }
            </div>
        </div>
    )
}

export default CommunityList
