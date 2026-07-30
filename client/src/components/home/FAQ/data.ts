import type { FAQItem } from "./types";

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Can I upload any annual report?",
    answer:
      "Yes. FinSight supports publicly available annual reports in PDF format. The AI extracts and analyses key financial information automatically.",
  },
  {
    id: 2,
    question: "Which file formats are supported?",
    answer:
      "Currently PDF files are supported. Support for Excel and Word documents will be added in future releases.",
  },
  {
    id: 3,
    question: "Is my financial data secure?",
    answer:
      "Absolutely. All uploaded files are encrypted during transmission and processing. Your reports remain private and secure.",
  },
  {
    id: 4,
    question: "How accurate are the AI insights?",
    answer:
      "FinSight combines AI analysis with structured financial extraction to provide reliable insights while always allowing users to verify the underlying data.",
  },
  {
    id: 5,
    question: "Can I ask follow-up questions?",
    answer:
      "Yes. Once a report has been analysed you can ask unlimited follow-up questions using natural language.",
  },
  {
    id: 6,
    question: "Do I need accounting knowledge?",
    answer:
      "No. FinSight explains financial reports in simple language so that students, investors and professionals can all understand the results.",
  },
];