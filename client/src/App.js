import React from 'react'
import Register from "./Components/Register"
import Login from "./Components/Login"
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <div>
    <h1>App</h1>
      
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App