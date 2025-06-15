
import { MessageSquare, Zap, Reply } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Install Extension",
      description: "Add our lightweight Chrome extension to your browser in under 30 seconds."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto-Summarize",
      description: "Our AI instantly summarizes long comment threads on any LinkedIn post."
    },
    {
      icon: <Reply className="w-8 h-8" />,
      title: "One-Click Reply",
      description: "Generate contextual, engaging replies with different tones and styles."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your LinkedIn engagement in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center group hover:scale-105 transition-transform duration-200"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
