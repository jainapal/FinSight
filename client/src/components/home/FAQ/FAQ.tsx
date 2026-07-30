import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FAQItem from "./FAQItem";
import { FAQS } from "./data";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before getting started with FinSight AI."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {FAQS.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              open={openItems.includes(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;