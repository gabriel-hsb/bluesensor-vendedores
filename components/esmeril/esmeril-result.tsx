import SuccessResult from "./result/success-result";
import FailedResult from "./result/failed-result";

import type { EsmerilT } from "@/types/esmeril/esmeril";

type Props = {
  chosenEsmeril: EsmerilT | null;
};

export default function EsmerilResult({ chosenEsmeril }: Props) {
  if (!chosenEsmeril) return <FailedResult />;

  const { projectLink, code, descr, price } = chosenEsmeril;

  return (
    <SuccessResult
      projectLink={projectLink}
      code={code}
      descr={descr}
      price={price}
    />
  );
}
