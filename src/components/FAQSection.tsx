
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the Chrome extension work?",
      answer: "Our extension integrates seamlessly with LinkedIn's interface. When you visit a LinkedIn post with comments, you'll see summary and reply buttons appear. The extension processes comments using advanced AI to provide instant summaries and contextual reply suggestions."
    },
    {
      question: "Is my LinkedIn data secure?",
      answer: "Absolutely. We only process the comments you choose to summarize, and we don't store any of your personal LinkedIn data. All processing happens securely, and we follow strict privacy guidelines to protect your information."
    },
    {
      question: "What types of replies can the AI generate?",
      answer: "Our AI can generate replies in various tones including professional, friendly, thought-provoking, supportive, and more. Each reply is contextually relevant to the conversation and maintains your authentic voice while saving you time."
    },
    {
      question: "Does it work on mobile LinkedIn?",
      answer: "Currently, our extension works on desktop browsers (Chrome, Edge, Firefox). We're working on mobile solutions and will notify users when they become available."
    },
    {
      question: "How accurate are the comment summaries?",
      answer: "Our AI provides highly accurate summaries by identifying key themes, sentiment, and important points from comment threads. The summaries capture 95%+ of relevant information while condensing long discussions into digestible insights."
    },
    {
      question: "Can I customize the AI's writing style?",
      answer: "Yes! You can set preferences for tone, formality level, and style. The AI learns from your feedback to better match your communication preferences over time."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our LinkedIn extension
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
