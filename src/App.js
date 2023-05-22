import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Posts from './components/Posts';
import SignUp from './components/SignUp';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const { users } = useTypedSelector(i => i.users)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            users?.user_id !== undefined ? <Posts /> : <Login />
          }></Route>
          <Route path='/createpost' element={<CreatePost />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
