import { LoggerService } from "@ciklum/logan";
import joi from "joi";
import { toast } from "react-toastify";
import type { StringIndex } from "src/typings/index.d.ts";

import { nl } from "src/utils/native-lodash.ts";

import { useContext, useEffect, useState } from "react";
import { FileContext } from "src/contexts/FileContext.tsx";
import Palette from "./components/Palette.tsx";
import PalettePlaceholder from "./components/PalettePlaceholder.tsx";
import { mdTokensSchema } from "./schema/mdTokensSchema.ts";

import * as themeJson from "src/stylesheets/mdpal-design-tokens-v1.ts";

const logger = new LoggerService();
logger.setTitle("PaletteContainer");

export default function PaletteContainer() {
  const { file } = useContext(FileContext);
  const [mdTokens, setMdTokens] = useState({});

  function processFileContent(content: string) {
    let mdTokensJson: StringIndex = {};
    try {
      mdTokensJson = JSON.parse(content);
      mdTokensJson = joi.attempt(mdTokensJson, mdTokensSchema);
      const msg = "MD Tokens parsed and applied";
      logger.debug(msg);
      toast.success(msg);
      setMdTokens(mdTokensJson);
    } catch (err) {
      logger.error(err);
      toast.error(`File schema validation failed: ${(err as Error).message}`);
    }
  }

  //tmp to skip choose file dialog
  useEffect(() => {
    const mdTokenString = JSON.stringify(themeJson);
    processFileContent(mdTokenString);
  }, []);

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      processFileContent(reader.result!.toString());
    };
    reader.readAsText(file);
  }, [file]);

  return (
    <div
      id="PaletteContainer"
      className={`
          w-full max-w-3xl md:max-w-4xl lg:max-w-6xl
          p-2 flex flex-col flex-grow
        `}
    >
      {!nl.isObjectEmpty(mdTokens) && <Palette mdTokens={mdTokens} />}
      {nl.isObjectEmpty(mdTokens) && <PalettePlaceholder />}
    </div>
  );
}
