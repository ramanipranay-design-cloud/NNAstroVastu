import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#FAF7F2" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
