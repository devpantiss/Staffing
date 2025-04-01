import React from 'react'
import HorizontalComponent from '../components/Bussiness/HorizontalComponent'
import Hero from '../components/Bussiness/Hero'
import AsSeenOn from '../components/common/AsSeenOn'
import TestimonialSection from '../components/homepage/TestimonialSection'
import Workers from '../components/Bussiness/Workers'
import NewsLetterPlusHowCards from '../components/homepage/NewsLetterPlusHowCards'
import RegistrationTab from '../components/Bussiness/RegistrationTab'

const Businesses: React.FC = () => {
  return (
    <div>
        <Hero />
        <AsSeenOn />
        <RegistrationTab />
        <HorizontalComponent />
        <TestimonialSection />
        <Workers />
        <NewsLetterPlusHowCards />
    </div>
  )
}

export default Businesses