import { LoggerService } from '@ciklum/logan';
import { useAtomValue } from 'jotai';
import { FaDownload, FaMagic, FaUpload } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Tooltip, TooltipContent, TooltipTrigger } from 'src/components/Tooltip';

import { btnActionsAtom } from 'src/state/btn-actions-atom';
import { classNames } from 'src/utils/classNames';

const logger = new LoggerService();
logger.setTitle('ToolbetlBtnGroup');

export default function ToolbetlBtnGroup() {
  const btnActions = useAtomValue(btnActionsAtom);

  const basicBtnCss = `
    inline-flex space-x-1 items-center
    transition-all duration-200
    
    border-md-sys-light-outline-variant
    
    text-sm font-medium px-4 py-2
    
    text-md-sys-light-primary
    hover:text-md-sys-light-on-primary
  
    bg-md-ref-pal-primary10
    hover:bg-md-sys-light-primary
    
    active:bg-md-ref-pal-primary200
    focus:outline-none
  `;

  return (
    <div id="ToolbetlBtnGroup" className="inline-flex items-center rounded-md shadow-sm">
      {/* Generate theme button */}
      <Tooltip>
        <TooltipTrigger
          className={classNames(basicBtnCss, `border  rounded-l-lg`)}
          onClick={() => btnActions.generateAndApplyTheme()}
        >
          <FaMagic />
        </TooltipTrigger>
        <TooltipContent className="Tooltip">Generate theme</TooltipContent>
      </Tooltip>

      {/* Purge colors and theme */}
      <Tooltip>
        <TooltipTrigger
          className={classNames(basicBtnCss, `border-y border-r`)}
          onClick={() => btnActions.deleteColorsAndTheme()}
        >
          <FaRegTrashCan />
        </TooltipTrigger>
        <TooltipContent className="Tooltip">Purge colors and theme</TooltipContent>
      </Tooltip>

      {/* Download theme JSON file */}
      <Tooltip>
        <TooltipTrigger
          className={classNames(basicBtnCss, `border-y`)}
          onClick={() => {
            btnActions.downloadCurrTheme();
          }}
        >
          <FaDownload />
        </TooltipTrigger>
        <TooltipContent className="Tooltip">Download theme JSON file</TooltipContent>
      </Tooltip>

      {/* Upload and apply theme file */}
      <Tooltip>
        <TooltipTrigger className={classNames(basicBtnCss, `border rounded-r-lg`)}>
          <label htmlFor="fileInput" className={`decoration-1 cursor-pointer`}>
            <FaUpload />
          </label>
          <input
            id="fileInput"
            type="file"
            accept=".json"
            style={{ display: 'none' }}
            onChange={btnActions.uploadThemeFile}
          />
        </TooltipTrigger>
        <TooltipContent className="Tooltip">Upload and apply theme file</TooltipContent>
      </Tooltip>
    </div>
  );
}
