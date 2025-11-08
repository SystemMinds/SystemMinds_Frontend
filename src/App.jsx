import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutCompany from './pages/AboutCompany.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-company" element={<AboutCompany />} />
    </Routes>
  )
}

export default App

