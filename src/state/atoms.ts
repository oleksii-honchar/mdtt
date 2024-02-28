import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const initialColor = "#ffffff";

export const primaryCoreColorAtom = atomWithStorage<string>("primaryCoreColor", initialColor);
export const secondaryCoreColorAtom = atomWithStorage<string>("secondaryCoreColor", initialColor);
export const tertiraryCoreColorAtom = atomWithStorage<string>("tertiraryCoreColor", initialColor);
export const errorCoreColorAtom = atomWithStorage<string>("errorCoreColor", initialColor);
export const neutralCoreColorAtom = atomWithStorage<string>("neutralCoreColor", initialColor);
export const neutralVariantCoreColorAtom = atomWithStorage<string>("neutralVariantCoreColor", initialColor);

export const coreColorsAtom = atom(
  (get) => ({
    primary: get(primaryCoreColorAtom),
    secondary: get(secondaryCoreColorAtom),
    tertiary: get(tertiraryCoreColorAtom),
    error: get(errorCoreColorAtom),
    neutral: get(neutralCoreColorAtom),
    neutralVariant: get(neutralVariantCoreColorAtom),
  }),
  (get, set, newPrice) => {
    set(primaryCoreColorAtom, initialColor);
    set(secondaryCoreColorAtom, initialColor);
    set(tertiraryCoreColorAtom, initialColor);
    set(errorCoreColorAtom, initialColor);
    set(neutralCoreColorAtom, initialColor);
    set(neutralVariantCoreColorAtom, initialColor);
  },
);
