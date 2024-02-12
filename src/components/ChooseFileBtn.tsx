import { ChangeEvent, useContext } from "react";
import { TbUpload } from "react-icons/tb";
import { toast } from "react-toastify";

import { LoggerService } from "@ciklum/logan";

import { FileContext } from "src/contexts/FileContext.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

const logger = new LoggerService();
logger.setTitle("ChooseFileBtn");

export function ChooseFileBtn() {
  const { setFile } = useContext(FileContext);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (!file) {
      toast.error("No file selected");
      return;
    }
    logger.debug("File:", file);
    setFile(file);
  };

  return (
    <Tooltip>
      <TooltipTrigger
        key="choose-file"
        className={`
          h-10 w-10
          text-md-sys-light-on-surface bg-md-sys-light-surface
          flex flex-row items-center justify-center
          text-sm font-medium
          rounded-full cursor-pointer transition-all
          shadow hover:shadow-md
        `}
      >
        <label htmlFor="fileInput" className={`p-[15px] underline decoration-1 cursor-pointer`}>
          <TbUpload />
        </label>
        <input id="fileInput" type="file" accept=".json" style={{ display: "none" }} onChange={handleFileChange} />
      </TooltipTrigger>
      <TooltipContent className="Tooltip">Choose theme json file</TooltipContent>
    </Tooltip>
  );
}
