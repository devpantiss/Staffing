import React from 'react'
import HorizontalComponent from '../components/Bussiness/HorizontalComponent'
import Hero from '../components/Bussiness/Hero'
import AsSeenOn from '../components/common/AsSeenOn'
import TestimonialSection from '../components/homepage/TestimonialSection'
import Workers from '../components/Bussiness/Workers'

const Businesses: React.FC = () => {
  return (
    <div>
        <Hero />
        <AsSeenOn />
        <HorizontalComponent />
        <TestimonialSection />
        <Workers />
    </div>
  )
}

export default Businesses