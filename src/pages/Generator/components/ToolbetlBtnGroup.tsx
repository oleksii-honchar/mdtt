import { LoggerService } from '@ciklum/logan';
import { useAtomValue } from 'jotai';
import { FaDownload, FaMagic, FaUpload } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

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
  `;

  return (
    <div id="ToolbetlBtnGroup" className="inline-flex items-center rounded-md shadow-sm">
      <button
        className={classNames(basicBtnCss, `border  rounded-l-lg`)}
        onClick={() => btnActions.generateAndApplyTheme()}
      >
        <FaMagic />
      </button>
      <button
        className={classNames(basicBtnCss, `border-y border-r`)}
        onClick={() => btnActions.deleteColorsAndTheme()}
      >
        <FaRegTrashCan />
      </button>
      <button
        className={classNames(basicBtnCss, `border-y`)}
        onClick={() => {
          btnActions.downloadCurrTheme();
        }}
      >
        <FaDownload />
      </button>
      <button
        className={classNames(basicBtnCss, `border rounded-r-lg`)}
        onClick={() => {
          btnActions.uploadThemeFile();
        }}
      >
        <FaUpload />
      </button>
    </div>
  );
}
