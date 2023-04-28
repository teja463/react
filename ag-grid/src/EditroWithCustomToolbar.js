import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UndoButton = () => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 3.25H2.88438L5.12625 1.00875L4.25 0.125L0.5 3.875L4.25 7.625L5.12625 6.74062L2.88625 4.5H10.5C11.4946 4.5 12.4484 4.89509 13.1517 5.59835C13.8549 6.30161 14.25 7.25544 14.25 8.25C14.25 9.24456 13.8549 10.1984 13.1517 10.9017C12.4484 11.6049 11.4946 12 10.5 12H5.5V13.25H10.5C11.8261 13.25 13.0979 12.7232 14.0355 11.7855C14.9732 10.8479 15.5 9.57608 15.5 8.25C15.5 6.92392 14.9732 5.65215 14.0355 4.71447C13.0979 3.77678 11.8261 3.25 10.5 3.25Z"
      fill="#212529"
    />
  </svg>
);
function undoChange() {
  this.quill.history.undo();
}

const CustomToolbar = (props) => (
  <div id={props.eid}>
    <select
      className="ql-header"
      defaultValue={""}
      onChange={(e) => e.persist()}
    >
      <option value="1" />
      <option value="2" />
      <option selected />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <select className="ql-color">
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="orange" />
      <option value="violet" />
      <option value="#d0d1d2" />
      <option selected />
    </select>
    <button className="ql-undoChange">
      <UndoButton />
    </button>
  </div>
);

export default function Editor(props) {
  const [value, setValue] = useState();
  const modulesRef = useRef({
    toolbar: {
      container: "#" + props.eid,
      handlers: {
        undoChange: undoChange,
      },
    },
    clipboard: {
      matchVisual: false,
    },
  });

  return (
    <div className="text-editor">
      <CustomToolbar eid={props.eid} />
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modulesRef.current}
        theme={"snow"}
      />
      <button onClick={() => props.deleteEditor(props.eid)}>
        Delete Section
      </button>
    </div>
  );
}
