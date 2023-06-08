import React, { useState } from "react"
import usePostActions from "../hooks/usePostActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Post = ({ post_id, title, body, likes, preview, didUserLiked, loadImageIfExists, postList }) => {
  const { users } = useTypedSelector(state => state.users)
  const { emitLike } = usePostActions()
  const [showAllImages, setShowAllImages] = useState(false)

  return (
    <div style={{ border: 'solid brown 3px', marginBottom: '10px' }}>
      <p>{title}</p>
      <p>{body}</p>
      <p>{likes}</p>
      {preview ? loadImageIfExists(preview) : ''}

      <div style={{ height: showAllImages === false ? '200px' : 'auto', display: 'flex', width: '50%', flexWrap: 'wrap', overflow: 'hidden', margin: 'auto' }}>
        {
          postList?.map(image => {
            return loadImageIfExists(image.image_link)
          })
        }
      </div>
      { showAllImages ? '' : <button onClick={() => setShowAllImages(true)}>Show all</button> }
      { !showAllImages ? '' : <button onClick={() => setShowAllImages(false)}>Hide</button> }

      <button
        style={{ background: didUserLiked ? 'red' : 'white' }}
        onClick={() => emitLike(users.user_id, post_id)}
      >{didUserLiked ? 'Unlike' : 'Like'}</button>
    </div>
  )
}

export default Post;
