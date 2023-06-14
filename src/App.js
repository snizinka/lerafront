import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';
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
import CommunityList from './components/CommunityList';
import SearchForUsers from './components/SearchForUsers';
import Profile from './components/Profile';
import ModeratorPanel from './components/ModeratorPanel';
import Report from './components/Report';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useNotificationsActions from './hooks/useNotificationsActions'
import Notifications from './components/Notifications';
import Search from './components/Search';

function App() {
  const [socket, setSocket] = useState()
  const [search, setSearch] = useState('')
  const { users } = useTypedSelector(i => i.users)
  const { status } = useTypedSelector(state => state.post)
  const { fetchNotifications } = useNotificationsActions()

  useEffect(() => {
    const connection = io('http://localhost:7000')
    connection?.emit('join-chat', {
      userId: users.user_id
    })
    setSocket(connection)

    connection?.on('recieve-message', (data) => {
      if (data.user_id !== users.user_id) {
        toast(data.username + ": " + data.message)
      }
    })

    fetchNotifications(users.user_id)
  }, [])

  useEffect(() => {
    if (status === 'Your report has been sent just now') {
      toast.success('Your report has been sent just now')
    }
  }, [status])

  return (
    <div className="App">
      <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
      <a href={`/search/${search}`}>Search</a>
      <Notifications />
      <Router>
        <Routes>
          <Route path='/' element={
            users?.user_id !== undefined ? <Posts /> : <Login />
          }></Route>
          <Route path='/confirmation' element={<ConfrimCode />}></Route>
          <Route path='/posts' element={<CreatePost socket={socket} />}></Route>
          <Route path='/editpost/:id' element={<EditPost />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/chat' element={<Chat socket={socket} />}></Route>
          <Route path='/chat/:id' element={<Chat socket={socket} />}></Route>
          <Route path='/editprofile' element={<EditProfile />}></Route>
          <Route path='/community/:id' element={<Community />}></Route>
          <Route path='/createcommunity' element={<CreateCommunity />}></Route>
          <Route path='/communities' element={<CommunityList />}></Route>
          <Route path='/findusers' element={<SearchForUsers />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          <Route path='/moderatorpanel' element={<ModeratorPanel />}></Route>
          <Route path='/report/:id' element={<Report />}></Route>
          <Route path='/search/:id' element={<Search />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App;
