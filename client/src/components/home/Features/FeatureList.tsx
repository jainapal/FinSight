import FeatureItem from "./FeatureItem";
import { FEATURES } from "./data";

interface FeatureListProps {
  activeFeature: string;
  onFeatureChange: (id: string) => void;
}

const FeatureList = ({
  activeFeature,
  onFeatureChange,
}: FeatureListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {FEATURES.map((feature) => (
        <FeatureItem
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          subtitle={feature.subtitle}
          active={activeFeature === feature.id}
          onClick={() => onFeatureChange(feature.id)}
        />
      ))}
    </div>
  );
};

export default FeatureList;