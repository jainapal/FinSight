import AIChatPreview from "./Previews/AIChatPreview";
import MetricsPreview from "./Previews/MetricsPreview";
import RiskPreview from "./Previews/RiskPreview";
import SecurityPreview from "./Previews/SecurityPreview";
import SummaryPreview from "./Previews/SummaryPreview";

interface FeatureRendererProps {
  activeFeature: string;
}

const FEATURE_MAP = {
  chat: AIChatPreview,
  metrics: MetricsPreview,
  risk: RiskPreview,
  summary: SummaryPreview,
  security: SecurityPreview,
};

const FeatureRenderer = ({
  activeFeature,
}: FeatureRendererProps) => {
  const Preview =
    FEATURE_MAP[activeFeature as keyof typeof FEATURE_MAP];

  return Preview ? <Preview /> : null;
};

export default FeatureRenderer;