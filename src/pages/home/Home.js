import React from 'react'
import HeroSection from './HeroSection'
import Tokenomics from './Tokenomics'
import RoadMap from './RoadMap'
import AboutSection from './AboutSection'
import Slider from "./Slider"

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Tokenomics />
      <RoadMap />
      <Slider />
    </div>
  )
}

export default Home
