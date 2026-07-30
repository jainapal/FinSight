import {
  BrainCircuit,
  ChartColumnIncreasing,
  FileText,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type FeatureId =
  | "chat"
  | "metrics"
  | "risk"
  | "summary"
  | "security";

export interface Feature {
  id: FeatureId;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  {
    id: "chat",
    title: "AI Chat",
    subtitle: "Ask questions naturally.",
    description:
      "Chat with your financial reports using natural language.",
    icon: BrainCircuit,
  },
  {
    id: "metrics",
    title: "Financial Metrics",
    subtitle: "Track KPIs instantly.",
    description:
      "Monitor revenue, profit, debt and cash flow in one place.",
    icon: ChartColumnIncreasing,
  },
  {
    id: "risk",
    title: "Risk Detection",
    subtitle: "Spot financial risks early.",
    description:
      "AI highlights unusual trends and possible financial concerns.",
    icon: TriangleAlert,
  },
  {
    id: "summary",
    title: "Smart Summary",
    subtitle: "Executive-ready insights.",
    description:
      "Generate concise summaries from lengthy financial reports.",
    icon: FileText,
  },
  {
    id: "security",
    title: "Enterprise Security",
    subtitle: "Private & secure analysis.",
    description:
      "Your reports stay encrypted and protected at every step.",
    icon: ShieldCheck,
  },
];