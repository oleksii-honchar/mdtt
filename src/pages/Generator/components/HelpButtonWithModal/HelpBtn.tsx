import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from 'src/components/Tooltip';
import { HelpModalDialog } from './HelpModalDialog';

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
          
          text-md-sys-light-primary
          hover:text-md-sys-light-on-primary
        
          bg-md-ref-pal-primary10
          hover:bg-md-sys-light-primary
          active:bg-md-ref-pal-primary200

          border border-md-sys-light-outline-variant
          flex flex-row items-center justify-center
          text-sm font-medium
          rounded-lg cursor-pointer transition-all
          focus:outline-none
        `}
      >
        ?
      </TooltipTrigger>
      <TooltipContent className="Tooltip">Get some help...</TooltipContent>
      <HelpModalDialog setIsOpen={setIsOpen} isOpen={isOpen} />
    </Tooltip>
  );
}
