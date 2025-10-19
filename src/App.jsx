import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TeamPage from './pages/TeamPage'
import TeconicoHero from './pages/TeconicoHero'
import HealthcarePage from './pages/HealthCarePage'
import SmartLightDemo from './pages/SmartLightDemo'
import HomeAutomationPage from './pages/HomeAutomationPage'
import BlogPage from './pages/BlogPage'
import ContactUsPage from './pages/ContactUsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeconicoHero />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path='/health-care' element={<HealthcarePage />} />
        <Route path='/demo' element={<SmartLightDemo />} />
        <Route path='/home-automation' element={<HomeAutomationPage />} />
        <Route path="/blog" element={ <BlogPage /> } />
        <Route path='/contact' element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
