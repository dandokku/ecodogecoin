import React from 'react'
import HeroSection from './HeroSection'
import Tokenomics from './Tokenomics'
import RoadMap from './RoadMap'
import AboutSection from './AboutSection'
import Contact from "./Contact"

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Tokenomics />
      <RoadMap />
      <Contact />
    </div>
  )
}

export default Home
