import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Introduce from './components/Introduce'
import Homepage from './pages/HomePage'
import OurTeam from './components/OurTeam'
import { Footer } from './components/Footer'
import Healthcare from './pages/HealthCare'
import OurProduct from './components/OurProduct'
import BlogPage from './pages/BlogPage'
import HomeAutomation from './pages/HomeAutomation'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="healthcare" element={<Healthcare />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path='/homeautomation' element={<HomeAutomation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App