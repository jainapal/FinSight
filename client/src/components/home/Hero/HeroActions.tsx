import { Link } from "react-router-dom";
import { Button } from "@/components/ui";

const HeroActions = () => {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link to="/register">
        <Button size="lg">
          Get Started
        </Button>
      </Link>

      <a href="#demo">
        <Button variant="outline" size="lg">
          Watch Demo
        </Button>
      </a>
    </div>
  );
};

export default HeroActions;