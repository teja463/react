import Counter from "./Counter";
import Demo1 from "./Demo1";
import Drawing from "./Drawing";
import Login from "./Login";
import HookDemo from "./HookDemo";
import DrawingWithoutRerender from "./DrawingWithoutRerender";
import DrawingWithMouseDown from "./DrawingWithMouseDown";
import DrawingShape from "./DrawingShape";
import DrawingShapes from "./DrawingShapes";
function App() {
  return (
    <div className="components">
      <Demo1 />
      <Login />
      <Counter />
      <div className="drawing">
        <Drawing />
        <DrawingWithoutRerender />
        <DrawingWithMouseDown />
        <DrawingShape />
        <DrawingShapes />
      </div>
      {/* <HookDemo /> */}
    </div>
  );
}

export default App;
