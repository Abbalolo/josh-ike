import Footer from "./components/Footer";
import HeroSection from "./components/hero-section";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
  <main className="relative">
    <HeroSection/>
    <Projects/>
    <Services/>
    <Testimonial/>
    <Footer/>
    <a href="/path-to-your-portfolio.pdf" download className="fixed bottom-10 right-10 w-14 h-15 border flex justify-center items-center">Download Portfolio</a>
  </main>
  );
}
