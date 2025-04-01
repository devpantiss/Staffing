import React from 'react'
import HeroSection from '../components/Academics/Hero';
import LifeAtSkillnet from '../components/Academics/LifeAtSkillnet';
import HowToApply from '../components/Academics/HoToApply';
import TrainingPrograms from '../components/Academics/TrainingPrograms';
import QualityBanner from '../components/Academics/QualityBanner';
import Hiring from '../components/Academics/Hiring';
import HorizontalAccordion from '../components/Academics/HorizontalAccordian';
import NewsLetterPlusHowCards from '../components/Academics/NewsLetter';

const Academics: React.FC = () => {
  return (
    <div>
        <HeroSection />
        <LifeAtSkillnet />
        <HowToApply />
        <TrainingPrograms />
        <QualityBanner />
        <Hiring />
        <HorizontalAccordion />
        <NewsLetterPlusHowCards />
    </div>
  )
}

export default Academics;