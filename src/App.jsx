import { useState } from 'react'
import './App.css'

//Components
import Navbar from './conponents/Navbar'
import Hero from './conponents/Hero'
import About from './conponents/About'
import InfoOne from './conponents/InfoOne'
import InfoTwo from './conponents/InfoTwo'
import CTA from './conponents/CTA'
import Testimonials from './conponents/Testimonials'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <InfoOne/>
    <InfoTwo/>
    <CTA/>
    <Testimonials/>
    </>
  )
}

export default App
