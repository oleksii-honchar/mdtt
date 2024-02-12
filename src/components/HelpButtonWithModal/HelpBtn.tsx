import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "src/components/Tooltip";
import { HelpModalDialog } from "./HelpModalDialog";

export function HelpBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip>
      <TooltipTrigger
        key="help"
        onClick={() => {
          setIsOpen(true);
        }}
        className={`
          h-8 w-8
          text-md-sys-light-primary bg-md-sys-light-surface
          flex flex-row items-center justify-center
          text-sm font-medium
          rounded-full cursor-pointer transition-all
          shadow hover:shadow-md
        `}
      >
        ?
      </TooltipTrigger>
      <TooltipContent className="Tooltip">Get some help...</TooltipContent>
      <HelpModalDialog setIsOpen={setIsOpen} isOpen={isOpen} />
    </Tooltip>
  );
}
