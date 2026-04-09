import Navbar from "./Navbar";
import Hero from "./Hero";
import Problem from "./Problem";
import Solution from "./Solution";
import Products from "./Products";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import WhyTecoHome from "./WhyTecoHome";
import AppUI from "./AppUI";
import UseCases from "./UseCases";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Products />
      <HowItWorks />
      <Features />
      <WhyTecoHome />
      <AppUI />
      <UseCases />
      <Testimonials />
      <Footer />
    </div>
  );
}
