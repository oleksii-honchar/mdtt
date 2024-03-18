import { LoggerService } from '@ciklum/logan';
import { useAtom, useSetAtom } from 'jotai';
import moment from 'moment';
import { toast } from 'react-toastify';

import { useEffect } from 'react';
import { btnActionsAtom } from 'src/state/btn-actions-atom';
import { coreColorsAtom, themeAtom } from 'src/state/color-atoms';
import { CoreThemeColors, MDTailwindTheme, MDTailwindThemeJson } from 'src/theme/MDTailwindTheme';
import Toolbelt from './Toolbelt';

const logger = new LoggerService();
logger.setTitle('ToolbeltContainer');

export default function ToolbeltContainer() {
  const [coreColors, resetCoreColors] = useAtom(coreColorsAtom);
  const [theme, setTheme] = useAtom(themeAtom);
  const setActions = useSetAtom(btnActionsAtom);

  function generateAndApplyTheme() {
    const theme = new MDTailwindTheme(coreColors as unknown as CoreThemeColors);

    setTheme(theme.toJson());
  }

  function getFullName() {
    const timestamp = moment().format('YYYYMMDDhhmm');
    return `md-tw-theme-${timestamp}.json`;
  }

  function downloadCurrTheme() {
    const filename = getFullName();
    const element = document.createElement('a');
    const content = JSON.stringify(theme, null, 2);

    element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    const msg = 'Theme downloaded successfully!';
    logger.debug(msg);
    toast.success(msg);
  }

  function deleteColorsAndTheme() {
    resetCoreColors(null);
    setTheme({} as MDTailwindThemeJson);
    logger.debug('Colors and theme deleted');
  }

  function uploadThemeFile() {
    logger.debug('[TBD] uploadThemeFile');
  }

  useEffect(() => {
    setActions({
      deleteColorsAndTheme,
      downloadCurrTheme,
      generateAndApplyTheme,
      uploadThemeFile,
    });
  }, []);

  return (
    <div
      id="ToolbeltContainer"
      className={`
          w-full max-w-3xl md:max-w-4xl lg:max-w-6xl
          flex flex-col flex-grow justify-center items-center
          rounded-tl-lg rounded-tr-lg
          backdrop-blur-sm shadow-sm  
          bg-md-sys-light-surface-container-lowest
        `}
    >
      <Toolbelt />
    </div>
  );
}
