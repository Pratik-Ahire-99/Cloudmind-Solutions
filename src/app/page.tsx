import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import About from "@/components/about/About";
import Solutions from "@/components/solutions/Solutions";
import Portfolio from "@/components/portfolio/Portfolio";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      {/* <Portfolio /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}