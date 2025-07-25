import React from 'react'
import Header from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { EarnSection } from '../components/EarnSection';
import { Web2meetWeb3 } from '../components/Web2meetWeb3';
import { GameVideoSection } from '../components/GameVideoSection';
import { OurEconomy } from '../components/OurEconomy';
import { OurJourney } from '../components/OurJourney';
import { Footer } from '../components/Footer';
export default function HomePage() {
  return (
      <>
      <Header/>
      <HeroSection />
      <EarnSection/>
      <Web2meetWeb3/>
      <GameVideoSection/>
      <OurEconomy/>
      <OurJourney/>
      <Footer/> 
      </>
  )
}
