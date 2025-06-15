
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AuthPage = () => {
  const { user, loading } = useSupabaseAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoadingSubmit(true);
    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setErrorMsg(error.message);
    } else {
      // Signup flow with email redirect
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth`
        }
      });
      if (error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("Check your email for a confirmation link.");
      }
    }
    setLoadingSubmit(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full p-8 border rounded-lg bg-white shadow flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-center mb-2">
          {mode === "login" ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            autoComplete="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMsg && (
            <div className="text-red-600 text-sm">{errorMsg}</div>
          )}
          <Button
            type="submit"
            className="w-full"
            disabled={loadingSubmit}
          >
            {loadingSubmit ? "Processing..." : mode === "login" ? "Sign In" : "Sign Up"}
          </Button>
        </form>
        <div className="text-center text-sm">
          {mode === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                className="underline text-blue-600"
                type="button"
                onClick={() => {
                  setMode("signup");
                  setErrorMsg("");
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="underline text-blue-600"
                type="button"
                onClick={() => {
                  setMode("login");
                  setErrorMsg("");
                }}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
