import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { MDTailwindThemeJson } from 'src/theme/MDTailwindTheme';
import { atomWithLocalStorage } from './atomWithLocalStorage';

const initialColor = ''; //empty

export const primaryCoreColorAtom = atomWithStorage<string>('primaryCoreColor', initialColor);
export const secondaryCoreColorAtom = atomWithStorage<string>('secondaryCoreColor', initialColor);
export const tertiraryCoreColorAtom = atomWithStorage<string>('tertiraryCoreColor', initialColor);
export const errorCoreColorAtom = atomWithStorage<string>('errorCoreColor', initialColor);
export const neutralCoreColorAtom = atomWithStorage<string>('neutralCoreColor', initialColor);
export const neutralVariantCoreColorAtom = atomWithStorage<string>('neutralVariantCoreColor', initialColor);

export const coreColorsAtom = atom(
  (get) =>
    Object.fromEntries(
      Object.entries({
        'primary': get(primaryCoreColorAtom),
        'secondary': get(secondaryCoreColorAtom),
        'tertiary': get(tertiraryCoreColorAtom),
        'error': get(errorCoreColorAtom),
        'neutral': get(neutralCoreColorAtom),
        'neutral-variant': get(neutralVariantCoreColorAtom),
      }).filter(([key, value]) => value),
    ),
  (get, set, value) => {
    set(primaryCoreColorAtom, (value as string) || initialColor);
    set(secondaryCoreColorAtom, (value as string) || initialColor);
    set(tertiraryCoreColorAtom, (value as string) || initialColor);
    set(errorCoreColorAtom, (value as string) || initialColor);
    set(neutralCoreColorAtom, (value as string) || initialColor);
    set(neutralVariantCoreColorAtom, (value as string) || initialColor);
  },
);

export const themeAtom = atomWithLocalStorage<MDTailwindThemeJson>('theme', {} as MDTailwindThemeJson);
