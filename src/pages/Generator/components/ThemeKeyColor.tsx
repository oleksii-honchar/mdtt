import { css } from "@emotion/react";
import { HexColorInput, HexColorPicker } from "powerful-color-picker";
import { useState } from "react";
import { FaMagic } from "react-icons/fa";
import { classNames } from "src/utils/classNames";

import { Tooltip, TooltipContent, TooltipTrigger, useTooltip } from "src/components/Tooltip.tsx";

import type { StringIndex } from "src/typings/index.d.ts";

export default function ThemeKeyColor({ name, colorHash }: StringIndex) {
  const [color, setColor] = useState(colorHash);
  const [newColor, setNewColor] = useState(color);
  const { open, setOpen } = useTooltip();

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
          rounded-md
          cursor-pointer
        `}
        ></div>
        {name}
      </TooltipTrigger>
      <TooltipContent
        className={`
          flex flex-col justify-center items-center
          Tooltip
          shadow-md
          bg-md-sys-light-background
        `}
      >
        <HexColorPicker color={newColor} onChange={setNewColor} />
        <div className="w-full h-10 flex flex-row justify-between items-end">
          <div className="flex flex-row">
            <div className="flex rounded-l-md h-8 w-5 items-center justify-end bg-md-sys-light-background">
              <div
                css={css`
                  background-color: ${newColor};
                `}
                className="rounded-sm h-4 w-4"
              >
                &nbsp;
              </div>
            </div>
            <HexColorInput
              className="w-16 h-8 text-center rounded-r-md block"
              color={newColor}
              onChange={setNewColor}
            />
          </div>
          <button
            className={classNames(commonCss, `h-8 border  rounded-lg w-18 flex flex-row justify-center items-center`)}
            onClick={() => {
              setColor(newColor);
              setOpen(false);
            }}
          >
            <FaMagic />
            &nbsp; Select
          </button>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
