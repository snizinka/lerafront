import React, { useEffect, useState } from "react"
import usePostActions from "../hooks/usePostActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import useProfileActions from "../hooks/useProfileActions";

const Profile = () => {
    const currentProfile = useParams()
    const { users } = useTypedSelector(state => state.users)
    const { profile } = useTypedSelector(state => state.profile)
    const { getProfile, followUser } = useProfileActions()

    useEffect(() => {
        if (currentProfile.id !== undefined) {
            getProfile(currentProfile.id, users.user_id, true)
        }
    }, [currentProfile])

    function loadImageIfExists(link) {
        try {
            return <img style={{ height: '100px' }} src={require(`../socialimages/${link}`)} />
        } catch (e) {
            return ''
        }
    }

    return (
        <div>
            {loadImageIfExists(profile?.image)}
            <h1>{profile?.username}</h1>

            <h2>Last couple images</h2>
            <div>
                {
                    profile?.gallary?.map(image => {
                        return loadImageIfExists(image.image_link)
                    })
                }
                <button>Load more</button>
            </div>
            {users.user_id !== profile.user_id ? <button onClick={() => followUser(profile?.user_id, users.user_id)}> {profile?.isFollowing ? 'Unfollow' : 'Follow'}</button> : ''}
        </div>
    )
}

export default Profile
