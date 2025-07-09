
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-construction-gold/30 hover:border-construction-gold hover:bg-construction-gold/10 transition-all duration-300"
      disabled
    >
      <Settings className="h-5 w-5 text-construction-gold" />
    </Button>
  );
};
