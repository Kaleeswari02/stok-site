
import EarningSection from "./components/EarningSection";
import { Footer } from "./components/Footer";
import { GameVideoSection } from "./components/GameVideoSection";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { OurEconomy } from "./components/OurEconomy";
import { OurJourney } from "./components/OurJourney";
import { Web2meetWeb3 } from "./components/Web2meetWeb3";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection />
      <EarningSection/>
      <Web2meetWeb3/>
      <GameVideoSection/>
      <OurEconomy/>
      <OurJourney/>
      <Footer />
    </>
  );
}
