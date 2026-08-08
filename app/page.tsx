import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Membership from "@/components/sections/Membership";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Membership />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}