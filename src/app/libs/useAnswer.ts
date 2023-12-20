import { atom, useAtomValue, useSetAtom } from "jotai";

const imageAtom = atom<string | null>(null);
export const useImage = () => useAtomValue(imageAtom);
export const useSetImage = () => useSetAtom(imageAtom);
