import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

const FAQItem = ({
  question,
  answer,
  open,
  onToggle,
}: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-md">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold text-slate-900">
          {question}
        </span>

        <ChevronDown
          className={`transition-all duration-300 ease-in-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6">
              <div className="mb-5 border-t border-slate-300"/>
            </div>
            <p className="px-6 pb-6 leading-7 text-slate-600">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;