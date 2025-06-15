
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, TrendingUp } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Founders Building in Public",
      description: "Stay on top of conversations about your product launches, engage with potential customers, and build meaningful relationships without spending hours reading through comments.",
      benefits: ["Increased engagement", "Better customer insights", "Time-efficient networking"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Recruiters & Talent Acquisition",
      description: "Engage with potential candidates in LinkedIn discussions, build your employer brand, and maintain visibility in professional conversations.",
      benefits: ["Enhanced candidate outreach", "Brand building", "Industry networking"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SDRs & Social Sellers",
      description: "Identify sales opportunities in comment threads, engage prospects naturally, and build relationships that convert to meaningful conversations.",
      benefits: ["Better lead generation", "Natural outreach", "Relationship building"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perfect for Your Role
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed specifically for professionals who need to engage efficiently on LinkedIn
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white mb-4 mx-auto">
                  {useCase.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
