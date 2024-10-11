import { useAtom } from "jotai";
import {themeAtom, buttonColorAtom} from './store/themeAtoms';

export default function Demo1() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [buttonColor] = useAtom(buttonColorAtom);
  
  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div>
      <div>Theme is {theme}</div>
      <button onClick={toggleTheme} style={{ backgroundColor: buttonColor }}>
        Toggle Theme
      </button>
    </div>
  );
}
