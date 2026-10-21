import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Offers from '@/components/sections/Offers';
import Team from '@/components/sections/Team';
import Reels from '@/components/sections/Reels';
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        
        {/* Membership section removed per client request. New replacement goes here! */}
        <Offers/>
        <Gallery />
          <Team />
          <Reels />
        <Testimonials />
        <Faq />
        <Contact />
      
      </main>

      <Footer />
    </>
  );
}