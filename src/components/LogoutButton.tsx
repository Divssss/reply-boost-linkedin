
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  return (
    <Button
      variant="outline"
      onClick={async () => {
        await supabase.auth.signOut();
        window.location.reload();
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
