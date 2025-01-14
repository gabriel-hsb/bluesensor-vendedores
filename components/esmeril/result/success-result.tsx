import React from "react";

import { FileText } from "lucide-react";

import { Button } from "@/components/ui/button";

import EsmerilListItem from "../esmeril-result-item";
import RestartButton from "./restart-button";
import NoProjectLink from "./no-project-link";

import numberToCurrency from "@/lib/number-to-currency";

import { EsmerilT } from "@/types/esmeril/esmeril";

type Props = Omit<EsmerilT, "specs">;

export default function SuccessResult({
  projectLink,
  code,
  descr,
  price,
}: Props) {
  return (
    <section className="mt-16 animate-entrance-left text-base sm:text-lg">
      <ul className="mb-6 flex w-fit flex-col gap-1 rounded-lg border-y border-l py-1 pl-2">
        <EsmerilListItem title={"Código"} value={code} />
        <EsmerilListItem title={"Descrição"} value={descr} />

        <li className="mb-1 w-full border-b p-1">
          <span className="text-muted-foreground">Preço de venda: </span>
          {price ? (
            <span className="text-lg sm:text-xl">
              {numberToCurrency(price)}
            </span>
          ) : (
            <span className="text-lg text-red-500 dark:text-red-200 sm:text-xl">
              Valor ainda não definido
            </span>
          )}
        </li>
        <li className="mb-1 w-full p-1">
          <span className="text-muted-foreground">
            Todos modelos de Motoesmeril acompanham:
          </span>
          <ul className="ml-6 list-disc [&>li]:mt-2">
            <li>Motoesmeril com pedra (marca Motomil)</li>
            <li>Tomada + Plugue Famatel</li>
            <li>Proteção de policarbonato</li>
            <li>Componentes WEG</li>
          </ul>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        {projectLink ? (
          <Button asChild className="cursor-pointer">
            <a href={projectLink} target="_blank">
              Ver Projeto <FileText className="ml-2 size-4" />
            </a>
          </Button>
        ) : (
          <NoProjectLink />
        )}
        <RestartButton />
      </div>
    </section>
  );
}
