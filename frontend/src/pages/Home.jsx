import Navbar from "../components/layout/Navbar"
import Hero from "../components/landing/Hero"
import Stats from "../components/landing/Stats"
import Features from "../components/landing/Features"
import HowItWorks from "../components/landing/HowItWorks"
import Footer from "../components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <Stats />

      <section id="features" className="scroll-mt-24">
        <Features />
      </section>

      <section id="how-it-works" className="scroll-mt-24">
        <HowItWorks />
      </section>

      <Footer />
    </div>
  );
}