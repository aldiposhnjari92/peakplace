import Contact from "./_components/contact";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Prices from "./_components/prices";
import Projects from "./_components/projects";
import Services from "./_components/services";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* hero section */}
      <Hero />
      {/* services */}
      <Services />
      {/* projects */}
      <Projects />
      {/* testimonials */}
      <Testimonials />
      {/* prices and packages */}
      <Prices />
      {/* contact section */}
      <Contact />
      {/* footer */}
      <Footer />
    </>
  );
}
