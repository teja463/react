import Counter from "./Counter";
import Demo1 from "./Demo1";
import Drawing from "./Drawing";
import Login from "./Login";
import HookDemo from "./HookDemo";
import DrawingWithoutRerender from "./DrawingWithoutRerender";
import DrawingWithMouseDown from "./DrawingWithMouseDown";
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
      </div>
      {/* <HookDemo /> */}
    </div>
  );
}

export default App;
