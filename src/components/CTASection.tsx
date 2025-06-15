
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your LinkedIn Engagement?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who are already saving hours while building better relationships on LinkedIn.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">7 Days</div>
              <div className="text-blue-100">Free Trial</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">2 Min</div>
              <div className="text-blue-100">Setup Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50%</div>
              <div className="text-blue-100">Time Saved</div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/90 border-0 text-gray-900"
                required
              />
            </div>
            <Button 
              type="submit"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 group"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
          
          <div className="text-sm text-blue-100">
            ✓ No spam, ever • ✓ Unsubscribe anytime • ✓ Get notified when we launch
          </div>
        </div>
        
        <Button 
          size="lg"
          className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Install Chrome Extension
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
