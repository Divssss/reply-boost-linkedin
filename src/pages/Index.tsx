
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user, loading } = useSupabaseAuth();
  const navigate = useNavigate();

  if (!loading && !user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-2xl font-semibold">Welcome to LinkedIn Comment Summarizer</h1>
          <p className="max-w-md text-center">Sign up or log in to start summarizing and replying to LinkedIn comment threads using AI.</p>
          <Button onClick={() => navigate("/auth")}>Login / Sign Up</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-inter">
      <HeroSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ScreenshotsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;
