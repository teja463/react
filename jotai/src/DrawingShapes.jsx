import { atom, useAtom } from "jotai";

const dotsAtom = atom([]);
const writeDotsAtom = atom(null, (get, set, by) => {
  const isDrawing = get(drawingAtom);
  if (isDrawing) {
    set(dotsAtom, (prev) => [...prev, by]);
  }
});

const drawingAtom = atom(false);
const writeDrawingAtom = atom(null, (get, set, by) => {
  set(drawingAtom, by);
});


function shapeAtom(points){
  return atom({ path: pointsToPath(points) });
} 

const shapesAtom = atom([]);
const addShapesAtom = atom (null, (get, set, by) => {
  const dots = get(dotsAtom);
  const newShapeAtom = shapeAtom(dots);
  set(shapesAtom, prev => [...prev, newShapeAtom]);
  set(dotsAtom, [])
});

export default function Drawing() {
  return (
    <div>
      <SvgRoot />
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
  const [, addShape] = useAtom(addShapesAtom);

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
      <SvgShapes />
    </svg>
  );
}

function SvgShape({shapeAtom}) {
  const [shape] = useAtom(shapeAtom);
  return (
    <g>
      <path d={shape.path} fill="none" stroke="black" strokeWidth="3" />
    </g>
  );
}

function SvgShapes(){
  const [shapes] = useAtom(shapesAtom);
  return (
    <g>
      {shapes.map(shape => <SvgShape key={`${shape}`} shapeAtom={shape} />)}
    </g>
  )
}
