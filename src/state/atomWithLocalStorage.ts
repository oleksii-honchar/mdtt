import { atom } from 'jotai';

export const atomWithLocalStorage = <T>(key: string, initialValue: unknown) => {
  const getInitialValue = (): T => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return initialValue as T;
  };
  const baseAtom = atom(getInitialValue());
  const derivedAtom = atom(
    (get) => get(baseAtom) as T,
    (get, set, update) => {
      const nextValue = typeof update === 'function' ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    },
  );
  return derivedAtom;
};
