import { LoggerService } from '@ciklum/logan';
import joi from 'joi';
import { useAtomValue } from 'jotai';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import type { AnyObject } from 'src/typings/index.d.ts';

import { nl } from 'src/utils/native-lodash.ts';

import { FileContext } from 'src/contexts/FileContext.tsx';
import { mdTailwindThemeSchema } from 'src/theme/mdTailwindThemeSchema.ts';
import Palette from './components/Palette.tsx';
import PalettePlaceholder from './components/PalettePlaceholder.tsx';

import { useDebouncedEffect } from 'src/hooks/useDebouncedEffect.ts';

import { themeAtom } from 'src/state/color-atoms.ts';
import { MDTailwindThemeJson } from 'src/theme/MDTailwindTheme.ts';

const logger = new LoggerService();
logger.setTitle('PaletteContainer');

export default function PaletteContainer() {
  const { file } = useContext(FileContext);
  const theme = useAtomValue(themeAtom);
  const [mdTokens, setMdTokens] = useState(theme);

  function processFileContent(content: string) {
    let mdTokensJson: AnyObject = {};
    try {
      mdTokensJson = JSON.parse(content);
      mdTokensJson = joi.attempt(mdTokensJson, mdTailwindThemeSchema);
      const msg = 'MD Tokens parsed and applied';
      logger.debug(msg);
      // toast.success(msg);
      setMdTokens(mdTokensJson as unknown as MDTailwindThemeJson);
    } catch (err) {
      logger.error(err);
      toast.error(`File schema validation failed: ${(err as Error).message}`);
    }
  }

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      processFileContent(reader.result!.toString());
    };
    reader.readAsText(file);
  }, [file]);

  useDebouncedEffect(
    () => {
      setMdTokens(theme);
      const msg = 'Theme updated';
      logger.debug(msg);
    },
    300,
    [theme],
  );

  return (
    <div
      id="PaletteContainer"
      className={`
          w-full max-w-3xl md:max-w-4xl lg:max-w-6xl
          p-2 flex flex-col flex-grow
          bg-md-sys-light-surface-container-lowest
          rounded-bl-lg rounded-br-lg
        `}
    >
      {!nl.isObjectEmpty(mdTokens) && <Palette mdTokens={mdTokens} />}
      {nl.isObjectEmpty(mdTokens) && <PalettePlaceholder />}
    </div>
  );
}
