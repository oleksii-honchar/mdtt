import './ToolbeltBtnGroup.pcss';

import { LoggerService } from '@ciklum/logan';
import { useAtomValue } from 'jotai';
import { FaDownload, FaMagic, FaUpload } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Tooltip, TooltipContent, TooltipTrigger } from 'src/components/Tooltip';

import { btnActionsAtom } from 'src/state/btn-actions-atom';
import { HelpBtn } from './HelpButtonWithModal/HelpBtn';

const logger = new LoggerService();
logger.setTitle('ToolbetlBtnGroup');

export default function ToolbetlBtnGroup() {
  const btnActions = useAtomValue(btnActionsAtom);

  return (
    <div className="space-x-2 flex flex-row">
      <div data-id="ToolbetlBtnGroup" className="tw-btn-group">
        {/* Generate theme button */}
        <Tooltip>
          <TooltipTrigger className="tw-btn-group-item tw-p-md" onClick={() => btnActions.generateAndApplyTheme()}>
            <FaMagic />
          </TooltipTrigger>
          <TooltipContent className="Tooltip">Generate theme</TooltipContent>
        </Tooltip>

        {/* Purge colors and theme */}
        <Tooltip>
          <TooltipTrigger className="tw-btn-group-item  tw-p-md" onClick={() => btnActions.deleteColorsAndTheme()}>
            <FaRegTrashCan />
          </TooltipTrigger>
          <TooltipContent className="Tooltip">Purge colors and theme</TooltipContent>
        </Tooltip>

        {/* Download theme JSON file */}
        <Tooltip>
          <TooltipTrigger
            className="tw-btn-group-item  tw-p-md"
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
          <TooltipTrigger className="tw-btn-group-item  tw-p-md">
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
      <div data-id="ToolbetlBtnGroup" className="tw-btn-group">
        <HelpBtn />
      </div>
    </div>
  );
}
