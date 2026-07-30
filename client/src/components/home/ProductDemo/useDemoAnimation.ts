import { useEffect, useState } from "react";
import { DEMO_STEPS } from "./data";

const useDemoAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % DEMO_STEPS.length);
    }, DEMO_STEPS[currentStep].duration);

    return () => clearTimeout(timeout);
  }, [currentStep]);

  return currentStep;
};

export default useDemoAnimation;