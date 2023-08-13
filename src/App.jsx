import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Home from './Components/Home'
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <div>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Routes>
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