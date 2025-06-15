
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthPage = () => {
  const { user, loading } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  const handleLinkedInLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "linkedin_oidc",
      options: {
        redirectTo: `${window.location.origin}/auth`
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full p-8 border rounded-lg bg-white shadow flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-center mb-2">Sign In / Sign Up</h1>
        <Button variant="outline" className="w-full flex items-center gap-2 justify-center" onClick={handleLinkedInLogin}>
          <svg width="24" height="24" aria-hidden="true" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" fill="#0077B5" rx="6"/><path fill="#fff" d="M25.36 17.45v6.18h-3.01v-5.78c0-1.45-.52-2.44-1.83-2.44-1 0-1.6.7-1.86 1.37-.1.23-.12.54-.12.86v6h-3.01s.04-9.71 0-10.72h3.01v1.52c.4-.61 1.12-1.47 2.73-1.47 2 0 3.51 1.31 3.51 4.13zm-12.5-7.75a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48zM8.86 23.63h3V12.91h-3v10.72z"/></svg>
          Continue with LinkedIn
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
