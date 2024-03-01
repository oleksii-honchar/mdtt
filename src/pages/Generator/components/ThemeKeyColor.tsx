import { LoggerService } from "@ciklum/logan";
import { css } from "@emotion/react";
import { Atom, useAtom } from "jotai";
import { HexColorInput, HexColorPicker } from "powerful-color-picker";
import { useEffect, useState } from "react";
import { FaRegThumbsUp, FaRegTrashCan } from "react-icons/fa6";
import { MdNotInterested } from "react-icons/md";

import { classNames } from "src/utils/classNames";

import { Tooltip, TooltipContent, TooltipTrigger, useTooltip } from "src/components/Tooltip.tsx";

const logger = new LoggerService();
logger.setTitle("ThemeKeyColor");

interface ThemeKeyColorParams {
  name: string;
  colorAtom: Atom<string>;
}

export default function ThemeKeyColor({ name, colorAtom }: ThemeKeyColorParams) {
  const [color, setColor]: [string, (value: string) => void] = useAtom(colorAtom);
  const [newColor, setNewColor] = useState<string>(color);
  const { open, setOpen } = useTooltip();

  const NoColor = () => <MdNotInterested className="text-md-sys-light-primary" />;

  const resetColor = () => {
    setNewColor("");
    setColor("");
  };

  useEffect(() => {
    setNewColor(color);
  }, [color]);

  const style = css`
    background-color: ${color};
  `;

  const commonCss = `
    text-md-sys-light-primary hover:text-md-sys-light-on-primary-container 
    hover:bg-md-sys-light-primary-container
    border-md-sys-light-outline-variant
    active:bg-md-ref-pal-primary200
    text-sm font-medium px-2 py-1
  `;

  return (
    <Tooltip enableHandleClose>
      <TooltipTrigger
        data-id="ThemeKeyColor"
        className={`
          flex flex-row justify-start items-center
          bg-md-sys-light-surface-container
          rounded-lg mx-2 p-2
        `}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          css={style}
          className={`
          w-6 h-6 mr-2
          rounded-md justify-center items-center flex flex-col
          cursor-pointer
        `}
        >
          {!newColor && <NoColor />}
        </div>
        {name}
      </TooltipTrigger>
      <TooltipContent
        className={`
          flex flex-col justify-center items-center
          Tooltip
          shadow-md rounded-lg p-4
          bg-md-sys-light-background
        `}
      >
        <HexColorPicker color={newColor} onChange={setNewColor} />
        <div className="w-full h-10 flex flex-row justify-between items-end">
          {/* Color preview */}
          <div className="flex flex-row">
            <div className="flex rounded-l-md h-8 w-5 items-center justify-end bg-md-sys-light-background">
              {/* Color preview */}
              {!newColor ? (
                <NoColor />
              ) : (
                <div
                  css={css`
                    background-color: ${newColor};
                  `}
                  className="rounded-sm h-4 w-4"
                >
                  &nbsp;
                </div>
              )}
            </div>
            <HexColorInput
              className="w-16 h-8 text-center rounded-r-md block"
              color={newColor || "00000"}
              onChange={setNewColor}
            />
          </div>

          {/* Action buttons */}
          <div className="inline-flex items-center rounded-md shadow-sm">
            <button
              className={classNames(
                commonCss,
                `h-8 border border-r-0 rounded-l-lg w-18 flex flex-row justify-center items-center`,
              )}
              onClick={() => {
                setColor(newColor);
                logger.info(newColor);
              }}
            >
              <FaRegThumbsUp />
            </button>
            <button
              className={classNames(
                commonCss,
                `h-8 border  rounded-r-lg w-18 flex flex-row justify-center items-center`,
              )}
              onClick={() => {
                resetColor();
                logger.info("color reset");
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
