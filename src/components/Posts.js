import React, { useEffect, useState } from "react"
import usePostActions from "../hooks/usePostActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Posts = () => {
    const { loadPosts } = usePostActions()
    const { postsList } = useTypedSelector(state => state.post)

    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <div>
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
