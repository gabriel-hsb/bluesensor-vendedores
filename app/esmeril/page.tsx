"use client";

import { FormEvent, useState } from "react";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

import FormRadioGroup from "@/components/esmeril/form-radio-group";
import EsmerilResult from "@/components/esmeril/esmeril-result";

// specs: all possible specs for an esmeril
import esmerilSpecs from "@/lib/esmeril/specs.json";

// allEsmeris: all created esmeris (matches with specs above)
import allExistingEsmeris from "@/lib/esmeril/all-esmeris.json";

import { EsmerilT } from "@/types/esmeril/esmeril";

export default function Esmeril() {
  const [chosenEsmerilConfigs, setChosenEsmerilConfigs] = useState({});
  const [specificationDone, setSpecificationDone] = useState(false);
  const [chosenEsmeril, setChosenEsmeril] = useState<EsmerilT | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast(); // shadcn ui

  function specifyEsmeril() {
    const matchIndex = allExistingEsmeris.findIndex(
      (esmeril) =>
        JSON.stringify(esmeril.specs) === JSON.stringify(chosenEsmerilConfigs),
    );

    if (matchIndex === -1) {
      setChosenEsmeril(null);
      return;
    }

    setChosenEsmeril(allExistingEsmeris[matchIndex]);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    const esmerilConfigsLength = Object.keys(chosenEsmerilConfigs).length;
    const specsLength = esmerilSpecs.length;

    if (esmerilConfigsLength !== specsLength) {
      setIsLoading(false);
      toast({
        title: "Erro",
        description: "Por favor selecione todas as especificações.",
        variant: "destructive",
      });
      return;
    }

    // timeout just for the UI animation.
    setTimeout(() => {
      setSpecificationDone(true);
      setIsLoading(false);
      specifyEsmeril();
    }, 1000);
  }

  return (
    <>
      <section className="min-h-[calc(100dvh-1.5rem+5rem)] animate-entrance-left">
        <div className="mx-auto my-2 max-w-[75rem] px-3 sm:my-7 sm:px-6">
          <form onSubmit={handleSubmit}>
            {esmerilSpecs.map(({ title, options, descr }) => (
              <FormRadioGroup
                key={title}
                title={title}
                options={options}
                descr={descr}
                setChosenEsmerilConfigs={setChosenEsmerilConfigs}
                specificationDone={specificationDone}
                isLoading={isLoading}
              />
            ))}
            {specificationDone ? (
              <EsmerilResult chosenEsmeril={chosenEsmeril} />
            ) : isLoading ? (
              <Button disabled className="my-4">
                Carregando... <Loader2 className="ml-3 h-4 w-4 animate-spin" />
              </Button>
            ) : (
              <Button className="my-4" type="submit">
                Especificar Motoesmeril
              </Button>
            )}
          </form>
        </div>
      </section>

      <Toaster />
    </>
  );
}
