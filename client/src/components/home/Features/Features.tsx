import { useEffect, useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import FeatureList from "./FeatureList";
import PreviewPanel from "./PreviewPanel";
import { FEATURES } from "./data";

const AUTO_PLAY_DELAY = 3000;

const Features = () => {
  const featureIds = useMemo(
    () => FEATURES.map((feature) => feature.id),
    []
  );

  const [activeFeature, setActiveFeature] = useState(featureIds[0]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setTimeout(() => {
      const currentIndex = featureIds.indexOf(activeFeature);

      const nextIndex =
        (currentIndex + 1) % featureIds.length;

      setActiveFeature(featureIds[nextIndex]);
    }, AUTO_PLAY_DELAY);

    return () => clearTimeout(timer);
  }, [activeFeature, paused, featureIds]);

  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          badge="FEATURES"
          title="Everything You Need"
          description="Powerful AI tools designed to simplify financial analysis."
        />

        <div
          className="mt-16 grid gap-10 lg:grid-cols-[360px_1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <FeatureList
            activeFeature={activeFeature}
            onFeatureChange={setActiveFeature}
          />

          <PreviewPanel
            activeFeature={activeFeature}
          />
        </div>

      </Container>
    </section>
  );
};

export default Features;