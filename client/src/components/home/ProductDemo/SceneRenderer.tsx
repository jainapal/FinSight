import { DEMO_STEPS } from "./data";
import { SCENE_MAP } from "./scenes";

interface SceneRendererProps {
  currentStep: number;
}

const SceneRenderer = ({ currentStep }: SceneRendererProps) => {
  const step = DEMO_STEPS[currentStep];

  const Scene =
    SCENE_MAP[step.id as keyof typeof SCENE_MAP] ?? SCENE_MAP.upload;

  return <Scene />;
};

export default SceneRenderer;