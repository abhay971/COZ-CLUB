import React from 'react'
import HeroSection from '../components/HeroSection'
import MembershipCards from '../components/MembershipCard'
import HelpSection from '../components/HelpSection'

function Home() {
  return (
    <div>
      <HeroSection/>
      <MembershipCards/>
      <HelpSection />
    </div>
  )
}

export default Home
