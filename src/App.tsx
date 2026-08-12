import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <Loader />
      <CustomCursor />
      <div className="min-h-screen relative" style={{ background: "#0C0C0C", overflowX: "clip" }}>
        <div className="grain-overlay" />
        <Navbar />
        <main className="relative" style={{ zIndex: 2 }}>
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}
