import { useState } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import PortfolioSection from './components/PortfolioSection'
import FooterSection from './components/FooterSection'
import './App.css'

function App() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <PortfolioSection/>
      <SkillsSection/>
      <FooterSection/>
    </>
  )
}

export default App
