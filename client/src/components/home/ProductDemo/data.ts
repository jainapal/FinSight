export interface DemoStep {
  id: string;
  title: string;
  description: string;
  duration: number;
}

export const DEMO_STEPS: DemoStep[] = [
  {
    id: "upload",
    title: "Upload Report",
    description: "Annual report uploaded successfully.",
    duration: 2000,
  },
  {
    id: "processing",
    title: "AI Analysis",
    description: "Reading financial statements.",
    duration: 2500,
  },
  {
    id: "risk",
    title: "Risk Detection",
    description: "Finding financial anomalies.",
    duration: 2500,
  },
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Preparing visual insights.",
    duration: 2500,
  },
  {
    id: "chat",
    title: "Ask AI",
    description: "Ask questions naturally.",
    duration: 3000,
  },
];