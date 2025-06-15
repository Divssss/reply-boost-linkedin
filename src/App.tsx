
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/Auth";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

const queryClient = new QueryClient();

function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, loading } = useSupabaseAuth();
  const location = useLocation();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          {/* Only authenticated users can access root and other main routes */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <Index />
              </RequireAuth>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
