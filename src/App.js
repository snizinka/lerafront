import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Posts from './components/Posts';
import SignUp from './components/SignUp';
import { useTypedSelector } from './hooks/useTypedSelector';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

function App() {
  const { users } = useTypedSelector(i => i.users)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            users?.user_id !== undefined ? <Posts /> : <Login />
          }></Route>
          <Route path='/posts' element={<CreatePost />}></Route>
          <Route path='/editpost/:id' element={<EditPost />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
