import React, { useEffect, useState } from "react"
import usePostActions from "../hooks/usePostActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import useUserActions from "../hooks/useUserActions";

const Posts = () => {
    const navigate = useNavigate()
    const { loadPosts } = usePostActions()
    const { signOut } = useUserActions()
    const { postsList } = useTypedSelector(state => state.post)

    useEffect(() => {
        loadPosts()
    }, [])

    function signOutUser () {
        signOut()
        navigate('/login')
    }

    return (
        <div>
            <button onClick={signOutUser}>Sign out</button>
            <div style={{ background: 'green', height: '90px', width: '100%' }}>

                <div>
                    <div>
                        LEFT BAR
                    </div>
                    {
                        postsList.map(i => {
                            return <div key={i.post_id}>
                                <h3>{i.post_title}</h3>
                                <p>{i.post_article}</p>
                                <img src={require('../socialimages/file-1684541606041-779691853.png')} />
                                <button>Like</button>
                            </div>
                        })
                    }
                </div>
                <div>
                    Right Bar
                </div>
            </div>





        </div>
    )
}

export default Posts;
