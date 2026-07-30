import { Container } from "@/components/ui";
import HeroContent from "./HeroContent";
import HeroDemo from "./HeroDemo";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-slate-50 pt-16 pb-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroDemo />
        </div>
      </Container>
    </section>
  );
};

export default Hero;