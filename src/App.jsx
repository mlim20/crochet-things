import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Materials from './pages/Materials'
import Gallery from './pages/Gallery'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <h1 className="title">crochet things</h1>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/materials" element={<Materials />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App