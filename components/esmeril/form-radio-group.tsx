import React, { useState, useEffect } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import TypographyH2 from "../ui/custom/typography/typography-h3";
import TypographySubheader from "../ui/custom/typography/typography-subheader";

import { PossibleSpecsT, OptionT } from "@/types/esmeril/esmeril";

type Props = PossibleSpecsT & {
  setChosenEsmerilConfigs: any;
  specificationDone: boolean;
  isLoading: boolean;
};

export default function FormRadioGroup({
  title,
  options,
  descr,
  setChosenEsmerilConfigs,
  specificationDone,
  isLoading,
}: Props) {
  const [disableInputs, setDisableInputs] = useState(false);

  const handleRadioInputChange = ({ target }: any) => {
    const { value } = target;

    setChosenEsmerilConfigs((prevChosenEsmerilConfigs: OptionT) => {
      const newConfigs = {
        ...prevChosenEsmerilConfigs,
        [title]: value,
      };
      return newConfigs;
    });
  };

  useEffect(() => {
    if (isLoading || specificationDone) {
      setDisableInputs(true);
    } else {
      setDisableInputs(false);
    }
  }, [isLoading, specificationDone]);

  return (
    <div className="my-8 sm:my-10">
      <div className="mb-4">
        <TypographyH2> {title} </TypographyH2>
        <TypographySubheader> {descr} </TypographySubheader>
      </div>
      <RadioGroup className="flex items-center gap-6">
        {options.map(({ name, value }: any) => {
          return (
            <div key={name} className="flex items-center space-x-2">
              <div>
                <RadioGroupItem
                  required={true}
                  disabled={disableInputs}
                  value={value}
                  id={name}
                  onClick={handleRadioInputChange}
                />
                <Label htmlFor={name} className="cursor-pointer">
                  {" "}
                  {name}{" "}
                </Label>
              </div>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
}
