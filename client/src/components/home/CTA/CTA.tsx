import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/80 px-8 py-16 text-center shadow-xl backdrop-blur-xl md:px-16"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Get Started Today
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Analyse Financial Reports
            <br />
            <span className="text-blue-600">
              in Minutes, Not Hours.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Upload an annual report, uncover key insights instantly,
            identify risks, and ask follow-up questions —
            all in one place.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span>✓ No Credit Card Required</span>
            <span>✓ Secure Uploads</span>
            <span>✓ AI Powered Insights</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;