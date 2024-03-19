import { atom } from 'jotai';

interface BtnActionsAtomValue {
  deleteColorsAndTheme: () => void;
  downloadCurrTheme: () => void;
  generateAndApplyTheme: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadThemeFile: (...args: any[]) => void;
}

export const btnActionsAtom = atom<BtnActionsAtomValue>({
  deleteColorsAndTheme: () => {},
  downloadCurrTheme: () => {},
  generateAndApplyTheme: () => {},
  uploadThemeFile: () => {},
});
