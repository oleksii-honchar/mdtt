import { css } from "@emotion/react";
import { HexColorInput, HexColorPicker } from "powerful-color-picker";
import { useState } from "react";
import { FaMagic } from "react-icons/fa";
import { classNames } from "src/utils/classNames";

import { Tooltip, TooltipContent, TooltipTrigger, useTooltip } from "src/components/Tooltip.tsx";

import type { StringIndex } from "src/typings/index.d.ts";

export default function ThemeKeyColor({ name, colorHash }: StringIndex) {
  const [color, setColor] = useState(colorHash);
  const { open, setOpen } = useTooltip();

  const style = css`
    background-color: ${colorHash};
  `;

  const commonCss = `
    text-md-sys-light-primary hover:text-md-sys-light-on-primary-container 
    hover:bg-md-sys-light-primary-container
    border-md-sys-light-outline-variant
    active:bg-md-ref-pal-primary200
    text-sm font-medium px-2 py-1
  `;

  return (
    <Tooltip enableHandleClose open={true}>
      <TooltipTrigger
        data-id="ThemeKeyColor"
        className={`
          flex flex-row justify-start items-center
          bg-md-sys-light-surface-container
          rounded-lg mx-2 p-2
        `}
        onClick={() => {
          console.log(open);
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
        `}
      >
        <HexColorPicker color={color} onChange={setColor} />
        <div className="w-full h-12 flex flex-row justify-between items-center">
          <HexColorInput className="w-16 text-center rounded-md" color={color} onChange={setColor} />
          <button
            className={classNames(commonCss, `border  rounded-lg w-18 flex flex-row justify-center items-center`)}
          >
            <FaMagic />
            &nbsp; Select
          </button>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
