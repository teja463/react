import { atom } from "jotai";

export const themeAtom = atom("light");
export const buttonColorAtom = atom((get) => {
  const a = get(themeAtom);
  return a === "light" ? "white" : "gray";
});
