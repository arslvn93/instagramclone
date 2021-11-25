import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Profile from './Components/Profile.jsx'
import AddPost from './Components/AddPost.jsx'
import './App.css';

// Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Profile />} />
      <Route path="/add/post" element={<AddPost />} />
    </Routes>
  </Router>
)

export default App;