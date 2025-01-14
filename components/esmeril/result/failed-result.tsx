import { Button } from "@/components/ui/button";
import React from "react";
import RestartButton from "./restart-button";
import { MessagesSquare } from "lucide-react";

export default function FailedResult() {
  return (
    <section className="animate-entrance-left">
      <p className="mb-8 text-red-500 dark:text-red-200">
        Desculpe, esse modelo de Motoesmeril ainda não foi criado
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=15991963805"
          >
            Solicitar modelo <MessagesSquare className="ml-2 size-5" />
          </a>
        </Button>
        <RestartButton />
      </div>
    </section>
  );
}
