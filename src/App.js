import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Posts from './components/Posts';
import SignUp from './components/SignUp';
import { useTypedSelector } from './hooks/useTypedSelector';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import ConfrimCode from './components/ConfrimCode';
import Chat from './components/Chat';
import io from 'socket.io-client';
import EditProfile from './components/EditProfile';
import Community from './components/Community';
import CreateCommunity from './components/CreateCommunity';

function App() {
  const [socket, setSocket] = useState()
  const { users } = useTypedSelector(i => i.users)

  useEffect(() => {
    const connection = io('http://localhost:7000')
    connection?.emit('join-chat', {
      userId: users.user_id
    })
    setSocket(connection)
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            users?.user_id !== undefined ? <Posts /> : <Login />
          }></Route>
          <Route path='/confirmation' element={<ConfrimCode />}></Route>
          <Route path='/posts' element={<CreatePost />}></Route>
          <Route path='/editpost/:id' element={<EditPost />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/chat' element={<Chat socket={socket} />}></Route>
          <Route path='/chat/:id' element={<Chat socket={socket} />}></Route>
          <Route path='/editprofile' element={<EditProfile />}></Route>
          <Route path='/community/:id' element={<Community />}></Route>
          <Route path='/createcommunity' element={<CreateCommunity />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
