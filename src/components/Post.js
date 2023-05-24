import React from "react"
import usePostActions from "../hooks/usePostActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Post = ({ post_id, title, body, likes, preview, didUserLiked, loadImageIfExists }) => {
  const { users } = useTypedSelector(state => state.users)
  const { emitLike } = usePostActions()

  return (
    <div style={{ border: 'solid brown 3px', marginBottom: '10px' }}>
      <p>{title}</p>
      <p>{body}</p>
      <p>{likes}</p>
      {preview ? loadImageIfExists(preview) : ''}
      <button
        style={{ background: didUserLiked ? 'red' : 'white' }}
        onClick={() => emitLike(users.user_id, post_id)}
      >{didUserLiked ? 'Unlike' : 'Like'}</button>
    </div>
  )
};

export default Post;
