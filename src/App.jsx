import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutCompany from './pages/AboutCompany.jsx'
import AboutLearnMore from './pages/AboutLearnMore.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-company" element={<AboutCompany />} />
      <Route path="/about-company/learn-more" element={<AboutLearnMore />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes>
  )
}

export default App

