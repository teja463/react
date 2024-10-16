import { atom, useAtom } from "jotai";
import { useRenderCount } from "../hooks/useRenderCount";

const dotsAtom = atom([]);
const dotsLengthAtom = atom((get) => get(dotsAtom).length);
const writeDotsAtom = atom(null, (get, set, by) => {
  set(dotsAtom, prev => [...prev, by]);
})

export default function Drawing() {
  return (
    <div>
      <SvgRoot />
      <Stats />
    </div>
  );
}

function SvgDots() {
  const [dots] = useAtom(dotsAtom);
  return (
    <g>
      {dots.map(([x, y]) => (
        <circle cx={x} cy={y} r="2" fill="#aaa" />
      ))}
    </g>
  );
}

function SvgRoot() {
  const [, saveDots] = useAtom(writeDotsAtom);
  const renderCount = useRenderCount();
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      id="draw1"
      onMouseMove={(e) => {
        // for getting client x and y co ordinates relative to svg
        var rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        saveDots([x, y]);
      }}
    >
      <rect width={"200"} height={"200"} fill="#eee" />
      <SvgDots />
      <text x="5" y="12" fontSize={'14px'}>Rendered {renderCount} times</text>
    </svg>
  );
}

function Stats() {
  const [dotsLength] = useAtom(dotsLengthAtom);
  return (
    <ul>
      <li>{dotsLength}</li>
    </ul>
  );
}
