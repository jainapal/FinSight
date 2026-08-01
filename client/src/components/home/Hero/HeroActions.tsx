import { Link } from "react-router-dom";
import { Button } from "@/components/ui";

const HeroActions = () => {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link to="/Signup">
        <Button size="lg">
          Get Started
        </Button>
      </Link>

      <a href="#Demo">
        <Button variant="outline" size="lg">
          Watch Demo
        </Button>
      </a>
    </div>
  );
};

export default HeroActions;