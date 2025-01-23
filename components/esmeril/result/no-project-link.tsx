import { MessagesSquare, Timer } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NoProjectLink() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" disabled>
        Projeto em andamento <Timer className="ml-2 size-4" />
      </Button>
      <Button asChild>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5515991963805"
        >
          {/* //TODO: send whatsapp message with desired esmeril specs */}
          Solicitar projeto <MessagesSquare className="ml-2 size-5" />
        </a>
      </Button>
    </div>
  );
}
