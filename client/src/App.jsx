
import './App.css';
import React from 'react'
import {BrowserRouter ,
  Routes,
  Route,
  Link} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
            <Route path="/login" exact element={< Login />} />
            <Route path="/register" exact element={< Register />} />
            <Route path="/dashboard" exact element={< Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
