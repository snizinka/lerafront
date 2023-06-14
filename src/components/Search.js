import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import useSearchActions from '../hooks/useSearchActions'
import { useTypedSelector } from "../hooks/useTypedSelector"

const Search = () => {
    const params = useParams()
    const {fetchSearch} = useSearchActions()
    const { posts, users } = useTypedSelector(state => state.search)

    useEffect(() => {
        fetchSearch(params.id)
    }, [params])


  return (
    <div>
        <h1>Searh result of: {params.id}</h1>
        <h1>Posts</h1>
        {
            posts.map(post => {
                return <div>
                    <h1>{post.post_title}</h1>
                </div>
            })
        }

        <h1>Users</h1>
        {
            users.map(user => {
                return <div>
                    <h1>{user.username}</h1>
                </div>
            })
        }
    </div>
  )
}

export default Search
