import { css } from "@emotion/react";
import { useContext } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "src/components/Tooltip.tsx";
import { ClipboardContext } from "src/contexts/ClipboardContext";
import type { AnyObject } from "src/typings/index.d.ts";
import { classNames } from "src/utils/classNames.ts";

export function ColorHashText({ color, toShowOnHover }: AnyObject) {
  return (
    <div
      className={classNames(
        `
        absolute bottom-0 left-0 px-1
        select-all
        text-[10px]
        `,
        toShowOnHover ? "hidden group-hover:block" : "block",
      )}
    >
      {color}
    </div>
  );
}

export function ColorShadeName({ shadeName, toShowOnHover }: AnyObject) {
  return (
    <div
      className={classNames(
        `
        absolute bottom-0 right-0 px-1
        text-[10px]
        `,
        toShowOnHover ? "hidden group-hover:block" : "block",
      )}
    >
      {shadeName}
    </div>
  );
}

export function KeyColor({ name, textColor, bgColor, colorHash, tokenPath }: AnyObject) {
  const { content, setContent } = useContext(ClipboardContext);

  const style = css`
    color: ${textColor};
    background-color: ${bgColor};
  `;

  return (
    <Tooltip>
      <TooltipTrigger
        css={style}
        className={`
          flex items-start justify-center w-full p-1
          relative
          rounded-lg
          border-2 border-transparent
          hover:border-md-sys-light-outline
          hover:cursor-pointer
          transition-all
        `}
        onClick={() => {
          setContent(tokenPath);
        }}
      >
        {name}
        <ColorHashText color={colorHash} />
      </TooltipTrigger>
      <TooltipContent className="Tooltip">{tokenPath}</TooltipContent>
    </Tooltip>
  );
}

export function PaletteColorPair({ colorPair }: AnyObject) {
  return (
    <div className="flex flex-col w-full">
      {colorPair.map((color: AnyObject, idx: number) => (
        <PaletteColor key={`col-pair-${idx}`} {...color} />
      ))}
    </div>
  );
}

export function PaletteColor({ name, textColor, bgColor, colorHash, shadeName, tokenPath }: AnyObject) {
  const { content, setContent } = useContext(ClipboardContext);

  const style = css`
    color: ${textColor};
    background-color: ${bgColor};
  `;

  return (
    <Tooltip>
      <TooltipTrigger
        data-component="PaletteColor"
        css={style}
        className={`
          flex items-start justify-start w-full p-1 h-14 
          last:h-12 last:text-[8px] md:last:text-[10px] lg:last:text-[14px] xl:last:text-sm
          relative text-[8px] md:text-[10px] lg:text-[14px] xl:text-sm
          first:rounded-t-lg last:rounded-b-lg
          border-2 border-transparent
          hover:border-md-sys-light-outline
          hover:cursor-pointer
          transition-all
        `}
        onClick={() => {
          setContent(tokenPath);
        }}
      >
        {name}
        <ColorHashText color={colorHash} />
        <ColorShadeName shadeName={shadeName} />
      </TooltipTrigger>
      <TooltipContent className="Tooltip">{tokenPath}</TooltipContent>
    </Tooltip>
  );
}

export function ColorShade({ name, textColor, bgColor, colorHash, shadeName, tokenPath }: AnyObject) {
  const { content, setContent } = useContext(ClipboardContext);

  const style = css`
    color: ${textColor};
    background-color: ${bgColor};
  `;

  return (
    <Tooltip>
      <TooltipTrigger
        css={style}
        className={`
          flex justify-start w-full h-8 
          relative 
          items-center hover:items-start
          text-[8px] md:text-[10px] lg:text-[14px] xl:text-sm
          hover:text-[6px] md:hover:text-[8px] lg:hover:text-[12px] xl:hover:text-xs
          p-1 hover:pt-0
          group
          first:rounded-t-lg last:rounded-b-lg
          border-2 border-transparent
          hover:border-md-sys-light-outline
          hover:cursor-pointer
          transition-all
        `}
        onClick={() => {
          setContent(tokenPath);
        }}
      >
        {name}
        <ColorHashText color={colorHash} toShowOnHover />
        <ColorShadeName shadeName={shadeName} toShowOnHover />
      </TooltipTrigger>
      <TooltipContent className="Tooltip">{tokenPath}</TooltipContent>
    </Tooltip>
  );
}

export function PaletteColorCol({ colorCol }: AnyObject) {
  return (
    <div className="flex flex-col w-full gap-2">
      {colorCol.map((colorPair: AnyObject, idx: number) => (
        <PaletteColorPair key={`col-pair-${idx}`} colorPair={colorPair} />
      ))}
    </div>
  );
}
