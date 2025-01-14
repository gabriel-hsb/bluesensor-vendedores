import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import React from "react";

export default function RestartButton() {
  function restart() {
    location.reload();
    window.scrollTo(0, 0);
  }

  return (
    <Button variant="outline" onClick={restart}>
      Reiniciar <RotateCcw />
    </Button>
  );
}
