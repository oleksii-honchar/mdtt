import { LoggerService } from '@ciklum/logan';
import { useAtom, useSetAtom } from 'jotai';
import moment from 'moment';
import { toast } from 'react-toastify';

import { ChangeEvent, useEffect } from 'react';
import { btnActionsAtom } from 'src/state/btn-actions-atom';
import { coreColorsAtom, themeAtom } from 'src/state/color-atoms';
import { CoreThemeColors, MDTailwindTheme } from 'src/theme/MDTailwindTheme';
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

    const resetColor = '#000000';
    const coreColors = {
      'primary': resetColor,
      'secondary': resetColor,
      'tertiary': resetColor,
      'error': resetColor,
      'neutral': resetColor,
      'neutral-variant': resetColor,
    };
    const theme = new MDTailwindTheme(coreColors as unknown as CoreThemeColors);

    setTheme(theme.toJson());
    logger.debug('Colors and theme reset');
  }

  function uploadThemeFile(event: ChangeEvent<HTMLInputElement>) {
    const logHeader = 'uploadThemeFile |';
    const file = event.target.files![0];
    if (!file) {
      toast.error('No file selected');
      return;
    }

    logger.debug(logHeader, `File: ${file.name}`);

    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target?.result as string;
      logger.debug(logHeader, 'Loaded content size:', fileContent.length);
      let mdThemeJson = {};
      try {
        mdThemeJson = JSON.parse(fileContent);
        const theme = new MDTailwindTheme(undefined, mdThemeJson);
        const msg = 'Theme created from json file successfuly';
        setTheme(theme.toJson());
        logger.debug(logHeader, msg);
        toast.success(msg);
      } catch (err) {
        logger.error(logHeader, err);
        toast.error(`File schema validation failed: ${(err as Error).message}`);
        return;
      }
    };

    reader.onerror = (event) => {
      const logTitle = 'Error occurred while reading the file.';
      logger.error(logHeader, logTitle, event.target?.error);
      toast.error(logTitle);
    };

    reader.readAsText(file);
  }

  /**
   *  It appears that when function set in atom, it clousures the current state.
   *  And when function is called it uses the state that was present when the function was set. So we need re-set the function with the new state.
   * */
  useEffect(() => {
    setActions({
      deleteColorsAndTheme,
      downloadCurrTheme,
      generateAndApplyTheme,
      uploadThemeFile,
    });
  }, [coreColors, theme]);

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
