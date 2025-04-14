import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
    return ( <Router >
        <div className = "App" >
        <Routes >
        <Route path = "/register" element = { <Register/> }/> 
        <Route path = "/login" element = { <Login/> }/> 
        <Route path = "/dashboard" element = { <Dashboard/> }/> 
        <Route path = "/" element = { <Login/> }/> 
        </Routes>
         </div>
          </Router>
    );
}

export default App;