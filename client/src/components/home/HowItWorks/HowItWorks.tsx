import { SectionTitle } from "@/components/ui";
import ProcessCard from "./ProcessCard";
import { PROCESS_STEPS } from "./data";

const HowItWorks = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="WHY FINSIGHT"
          title="Why Finance Teams Choose FinSight"
          description="Built to help analysts, investors and finance teams understand financial reports faster with trustworthy AI insights."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <ProcessCard
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;