import { atom } from "jotai";

export const themeAtom = atom("light");
export const buttonColorAtom = atom((get) => {
  const a = get(themeAtom);
  return a === "light" ? "white" : "gray";
});

if (process.env.NODE_ENV !== 'production') {
  themeAtom.debugLabel = 'themeAtom';
  buttonColorAtom.debugLabel = 'buttonColorAtom'
  // debugLabel is 'count' now
}
