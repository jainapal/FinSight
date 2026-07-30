import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import ProductDemo from "@/components/home/ProductDemo"
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";


const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductDemo />
        <HowItWorks/>
        <Features/>
      </main>
    </>
  );
};

export default Home;