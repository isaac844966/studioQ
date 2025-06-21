"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0); 

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const faqs = [
    {
      question: "How fast will I receive my designs?",
      answer:
        "Most designs are delivered within 2-5 business days. Complex projects may take slightly longer, but we'll always communicate timelines upfront.",
    },
    {
      question: "How does onboarding work?",
      answer:
        "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you're ready to rock. Further instructions on how to use the Trello board to request designs can be found on the board itself.",
    },
    {
      question: "How fast will I receive my designs?",
      answer:
        "Most designs are completed within 2-5 business days on average. Rush requests can often be accommodated for an additional fee.",
    },
    {
      question: "How fast will I receive my designs?",
      answer:
        "Typical turnaround time is 2-5 business days, depending on the complexity of your request and current queue length.",
    },
    {
      question: "How fast will I receive my designs?",
      answer:
        "Design delivery usually takes 2-5 business days. We'll provide more specific timelines based on your project requirements.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-[65%_30%] lg:gap-16 lg:items-center">
          <div>
            <div className="mb-12">
              <div className="inline-block px-6 py-2 bg-[#F7F7F7] dark:bg-[#242424] text-sm font-mono mb-6 rounded">
                FAQs
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full py-2 text-left flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="pb-4">
                      <p className="text-gray-600 text-sm font-mono dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 lg:mt-0">
            <div className="bg-[#F7F7F7] dark:bg-[#242424] p-8 ">
              <div className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
                """
              </div>
              <blockquote className="text-xl font-semibold text-gray-900 dark:text-white  leading-relaxed mb-20">
                Studio-Q brought not only technical expertise but also a clear
                understanding of how to design around real-world healthcare
                challenges.
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Dr Zara Morlibo
                  </div>
                  <div className="text-sm font-mono text-gray-600 dark:text-gray-400">
                    Co-founder Débbo Africa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
