import { atom, useAtom } from "jotai";
import { useRenderCount } from "../hooks/useRenderCount";

const dotsAtom = atom([]);
const dotsLengthAtom = atom((get) => get(dotsAtom).length);
const drawingAtom = atom(false);
const writeDrawingAtom = atom(null, (get, set, by) => {
  set(drawingAtom, by)
})
const writeDotsAtom = atom(null, (get, set, by) => {
  const isDrawing = get(drawingAtom);
  if(isDrawing){
    set(dotsAtom, prev => [...prev, by]);
  }
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
  const [, writeDots] = useAtom(writeDotsAtom);
  // const [, setDraw] = useAtom(drawingAtom);
  /** 
   * Reason for using writeDrawingAtom is if you use drawingAtom it return two variables current state and function to update state
   * so when we use drawingAtom and update setDraw when mouse down or up it causes rerender,
   * if we use writeDrawingAtom and update setDraw it doesn't re render becuase in the write only type we don't return state,
   * since we are not returning updated state it doesn't re render 
   */
  const [, setDraw] = useAtom(writeDrawingAtom);
  const renderCount = useRenderCount();
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      id="draw1"
      onMouseDown={() => setDraw(true)}
      onMouseUp={() => setDraw(false)}
      onMouseMove={(e) => {
        // for getting client x and y co ordinates relative to svg
        var rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        writeDots([x, y]);
      }}
    >
      <rect width={"200"} height={"200"} fill="#eee" />
      <SvgDots />
      <text x="5" y="12" fontSize={'14px'}>Drag mouse, Rendered {renderCount} times</text>
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
