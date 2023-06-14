import React, { useRef, useState } from "react"
import usePostActions from "../hooks/usePostActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Post = ({ post_id, title, body, likes, preview, didUserLiked, loadImageIfExists, postList, socket }) => {
  const reportDiv = useRef()
  const { users } = useTypedSelector(state => state.users)
  const { emitLike, reportPost } = usePostActions()
  const [showAllImages, setShowAllImages] = useState(false)
  const [reportReason, setReportReason] = useState('')

  function showOrHideReportDiv() {
    if (reportDiv.current.style.visibility === 'hidden') {
      reportDiv.current.style.visibility = 'visible'
    } else {
      reportDiv.current.style.visibility = 'hidden'
    }
  } /// postId | userId | report | date and time

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
      {showAllImages ? '' : <button onClick={() => setShowAllImages(true)}>Show all</button>}
      {!showAllImages ? '' : <button onClick={() => setShowAllImages(false)}>Hide</button>}

      <button
        style={{ background: didUserLiked ? 'red' : 'white' }}
        onClick={() => emitLike(users.user_id, post_id)}
      >{didUserLiked ? 'Unlike' : 'Like'}</button>

      <button onClick={showOrHideReportDiv}>Report</button>


      <div ref={reportDiv} style={{
        visibility: 'hidden'
      }}>
        <h2>Report reason</h2>
        <input type="text" value={reportReason} onChange={(e) => setReportReason(e.target.value)} />
        <button onClick={() => {
          if (reportReason !== '') {
            reportPost(post_id, users.user_id, reportReason)
          }
        }}>Report</button>
        <button onClick={showOrHideReportDiv}>Cancel</button>
      </div>
    </div>
  )
}

export default Post;
