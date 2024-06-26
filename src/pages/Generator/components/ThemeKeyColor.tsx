import { LoggerService } from '@ciklum/logan';
import { css } from '@emotion/react';
import { Atom, useAtom } from 'jotai';
import { HexColorInput, HexColorPicker } from 'powerful-color-picker';
import { useEffect, useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { MdNotInterested } from 'react-icons/md';

import { Tooltip, TooltipContent, TooltipTrigger } from 'src/components/Tooltip.tsx';

const logger = new LoggerService();
logger.setTitle('ThemeKeyColor');

interface ThemeKeyColorParams {
  name: string;
  colorAtom: Atom<string>;
}

export default function ThemeKeyColor({ name, colorAtom }: ThemeKeyColorParams) {
  const [themeColor, setThemeColor]: [string, (value: string) => void] = useAtom(colorAtom);
  const [colorPickerColor, setColorPickerColor] = useState<string>(themeColor);

  const ref = useRef();

  const NoColor = () => <MdNotInterested className="text-md-sys-light-primary" />;

  const resetColor = () => {
    setColorPickerColor('');
    setThemeColor('');
  };

  useEffect(() => {
    setColorPickerColor(themeColor);
  }, [themeColor]);

  useEffect(() => {
    logger.info(`open=${open}`);
  }, [open]);

  const style = css`
    background-color: ${themeColor};
  `;

  const colorPickerBtnsCommonCss = `
    text-sm font-medium px-2 py-1
    
    text-md-sys-light-primary hover:text-md-sys-light-on-primary-container 
    
    hover:bg-md-sys-light-primary-container
    active:bg-md-ref-pal-primary200
    
    border-md-sys-light-outline-variant
  `;

  return (
    <Tooltip enableHandleClose useArrow={false}>
      {/* Color & it's name */}
      <TooltipTrigger
        data-id="ThemeKeyColor"
        className={`
          flex flex-row justify-start items-center
          bg-md-sys-light-surface-lowest
          border border-md-sys-light-outline-variant/30
          rounded-lg mx-2 p-2
        `}
      >
        <div
          css={style}
          className={`
          w-6 h-6 xl:mr-2
          rounded-md justify-center items-center flex flex-col
          cursor-pointer
        `}
        >
          {!themeColor && <NoColor />}
        </div>
        <span className="sm:hidden xl:block">{name}</span>
      </TooltipTrigger>
      <TooltipContent
        className={`
          flex flex-col justify-center items-center
          Tooltip
          shadow-lg rounded-lg p-4
          bg-md-sys-light-surface
          border border-md-sys-light-outline-variant/60
        `}
        ref={ref}
      >
        <HexColorPicker color={colorPickerColor} onChange={setColorPickerColor} />
        <div className="w-full h-10 flex flex-row justify-between items-end">
          {/* Color preview */}
          <div className="flex flex-row">
            <div className="flex rounded-l-md h-8 w-5 items-center justify-end bg-md-sys-light-surface-container">
              {/* Color preview */}
              {!colorPickerColor ? (
                <NoColor />
              ) : (
                <div
                  css={css`
                    background-color: ${colorPickerColor};
                  `}
                  className="rounded-sm h-4 w-4"
                >
                  &nbsp;
                </div>
              )}
            </div>
            <HexColorInput
              className="w-16 h-8 text-center rounded-r-md block bg-md-sys-light-surface-container text-md-sys-light-on-surface"
              color={colorPickerColor || '00000'}
              onChange={setColorPickerColor}
            />
          </div>

          {/* Action buttons */}
          <div className="tw-btn-group">
            <button
              className="w-8 tw-btn-group-item tw-p-sm"
              onClick={() => {
                setThemeColor(colorPickerColor);
                // @ts-ignore
                if (ref.current) ref.current.style!.display = 'none';
                logger.info(colorPickerColor);
              }}
            >
              <FaCheck />
            </button>
            <button
              className="w-8 tw-btn-group-item tw-p-sm"
              onClick={() => {
                resetColor();
                logger.info('color reset');
              }}
            >
              <FaRegTrashCan />
            </button>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
