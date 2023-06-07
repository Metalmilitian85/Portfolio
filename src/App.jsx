import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {

  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App