
import EarningSection from "./components/EarningSection";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Web2meetWeb3 } from "./components/Web2meetWeb3";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection />
      <EarningSection/>
      <Web2meetWeb3/>
      <Footer />
    </>
  );
}
