import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-2 text-center dark:bg-zinc-950">
      <TooltipProvider>
        Feito por{" "}
        <Tooltip>
          <TooltipTrigger>
            <a
              href="http://github.com/gabriel-hsb"
              target="_blank"
              className="underline"
            >
              gabriel-hsb,
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <Image
              alt="GitHub Profile Picture"
              className="max-w-20 py-2"
              src="https://github.com/gabriel-hsb.png"
            />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>{" "}
      para{" "}
      <a
        href="https://bluesensor.com.br/"
        target="_blank"
        className="underline"
      >
        BlueSensor
      </a>
    </footer>
  );
}
