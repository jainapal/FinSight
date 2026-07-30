import { SectionTitle } from "@/components/ui";
import BrowserWindow from "./BrowserWindow";
import DemoTimeline from "./DemoTimeline";
import SceneRenderer from "./SceneRenderer";
import useDemoAnimation from "./useDemoAnimation";
import { AnimatePresence, motion } from "framer-motion";

const ProductDemo = () => {
  const currentStep = useDemoAnimation();
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionTitle
          badge="Product Demo"
          title="From Upload to Insight — in Seconds"
          description="Watch how FinSight AI transforms complex financial reports into clear, actionable insights through an intelligent analysis workflow."
          
        />

        {/* Main Content */}
        <div className="mt-20 grid items-start gap-14 lg:grid-cols-[380px_1fr]">
          {/* Left */}
          <DemoTimeline currentStep={currentStep} />

          {/* Right */}
          <BrowserWindow>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                className="h-full"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <SceneRenderer currentStep={currentStep} />
              </motion.div>
            </AnimatePresence>
          </BrowserWindow>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;