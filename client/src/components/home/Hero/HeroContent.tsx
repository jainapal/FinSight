import { Badge } from "@/components/ui";
import HeroActions from "./HeroActions";

const HeroContent = () => {
  return (
    <div className="max-w-xl">
      <Badge>
        AI-Powered Financial Report Analysis
      </Badge>

      <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
        Financial reports shouldn't take hours to understand.
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
      Upload an annual report and let AI uncover financial risks, explain 
      key financial metrics, and answer complex questions in minutes.
      </p>

      <HeroActions />
    </div>
  );
};

export default HeroContent;