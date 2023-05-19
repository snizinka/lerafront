import React, { useState } from 'react';
import './App.css';
import { useTypedSelector } from './hooks/useTypedSelector'
import usePostActions from './hooks/usePostActions'

function App() {
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [image, setImage] = useState('')

const { status } = useTypedSelector(state => state.post)
const { createPost } = usePostActions()

  return (
    <div className="App">
      <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' />
      <input value={body} onChange={(e) => setBody(e.target.value)} type='text' />
      <input type='file' onChange={(e) => setImage(e.target.value)} />

      <button onClick={() => {

        createPost(title, body, image)
        
      }}>Create post</button>
    </div>
  );
}

export default App;
