import React from 'react'
import HeroSection from './HeroSection'
import Tokenomics from './Tokenomics'
import RoadMap from './RoadMap'
import AboutSection from './AboutSection'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <RoadMap />
      <Tokenomics />
    </div>
  )
}

export default Home
