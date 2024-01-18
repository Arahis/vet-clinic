import { atom, useAtomValue, useSetAtom } from "jotai";

const answerAtom = atom<string | null>(null);
export const useAnswer = () => useAtomValue(answerAtom);
export const useSetAnswer = () => useSetAtom(answerAtom);
