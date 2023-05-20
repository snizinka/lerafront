import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Posts from './components/Posts';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Posts />}></Route>
          <Route path='/createpost' element={<CreatePost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
