import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home'
import Experience from './components/Pages/Experience'
import Projects from './components/Pages/Projects'
import Contact from './components/Pages/Contact'
import Error from './components/Pages/Error'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route component={Error} />
      </Routes>
    </main>
  )
}

export default App
