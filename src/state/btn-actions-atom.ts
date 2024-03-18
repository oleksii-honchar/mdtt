import { atom } from 'jotai';

interface BtnActionsAtomValue {
  deleteColorsAndTheme: () => void;
  downloadCurrTheme: () => void;
  generateAndApplyTheme: () => void;
  uploadThemeFile: () => void;
}

export const btnActionsAtom = atom<BtnActionsAtomValue>({
  deleteColorsAndTheme: () => {},
  downloadCurrTheme: () => {},
  generateAndApplyTheme: () => {},
  uploadThemeFile: () => {},
});
