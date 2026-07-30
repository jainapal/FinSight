import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import ProductDemo from "@/components/home/ProductDemo"
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductDemo />
        <HowItWorks/>
        <Features/>
        <FAQ/>
        <CTA/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;