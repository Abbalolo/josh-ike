import Footer from "./components/Footer";
import HeroSection from "./components/hero-section";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
  <main>
    <HeroSection/>
    <Projects/>
    <Services/>
    <Testimonial/>
    <Footer/>
  </main>
  );
}
