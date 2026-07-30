import { AnimatePresence, motion } from "framer-motion";
import FeatureRenderer from "./FeatureRenderer";
import BrowserWindow from "../ProductDemo/BrowserWindow";

interface PreviewPanelProps {
  activeFeature: string;
}

const PreviewPanel = ({
  activeFeature,
}: PreviewPanelProps) => {
  return (
    <div className="h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <BrowserWindow 
          title="FinSight Workspace"
          footerLeft="Interactive Demo"
          footerRight="FinSight"
          >
            <FeatureRenderer activeFeature={activeFeature} />
          </BrowserWindow>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PreviewPanel;