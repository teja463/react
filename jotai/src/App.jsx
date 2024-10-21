import Counter from "./jotai/Counter";
import Demo1 from "./jotai/Demo1";
import Drawing from "./jotai/Drawing";
import Login from "./jotai/Login";
import DrawingWithoutRerender from "./jotai/DrawingWithoutRerender";
import DrawingWithMouseDown from "./jotai/DrawingWithMouseDown";
import DrawingShape from "./jotai/DrawingShape";
import DrawingShapes from "./jotai/DrawingShapes";
import MultiselectDropdown from "./MultiselectDropdown";
import YoutubeForm from "./reacthookform/YoutubeForm";
import StudentForm from "./reacthookform/StudentForm";

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
      <MultiselectDropdown />
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <YoutubeForm />
        <StudentForm />
      </div>
    </div>
  );
}

export default App;
