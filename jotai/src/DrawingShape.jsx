import { atom, useAtom } from "jotai";

const dotsAtom = atom([]);
const dotsLengthAtom = atom((get) => get(dotsAtom).length);

const drawingAtom = atom(false);
const writeDrawingAtom = atom(null, (get, set, by) => {
  set(drawingAtom, by);
});
const writeDotsAtom = atom(null, (get, set, by) => {
  const isDrawing = get(drawingAtom);
  if (isDrawing) {
    set(dotsAtom, (prev) => [...prev, by]);
  }
});

const shapeAtom = atom({ path: "" });
const addShapeAtom = atom(null, (get, set) => {
  set(shapeAtom, { path: pointsToPath(get(dotsAtom)) });
  set(dotsAtom, []);
});

export default function Drawing() {
  return (
    <div>
      <SvgRoot />
      <Stats />
    </div>
  );
}

function pointsToPath(points) {
  let d = "";
  points.forEach((point) => {
    if (d) {
      d += ` L ${point[0]} ${point[1]}`;
    } else {
      d = `M ${point[0]} ${point[1]}`;
    }
  });
  return d;
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
  const [, setDraw] = useAtom(writeDrawingAtom);
  const [, addShape] = useAtom(addShapeAtom);

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      id="draw1"
      onMouseDown={() => setDraw(true)}
      onMouseUp={() => {
        setDraw(false);
        addShape();
      }}
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
      <SvgShape />
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

function SvgShape() {
  const [shape] = useAtom(shapeAtom);
  return (
    <g>
      <path d={shape.path} fill="none" stroke="black" strokeWidth="3" />
    </g>
  );
}
