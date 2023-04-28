import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const icons = ReactQuill.Quill.import("ui/icons");

icons[
  "undo"
] = `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 3.25H2.88438L5.12625 1.00875L4.25 0.125L0.5 3.875L4.25 7.625L5.12625 6.74063L2.88625 4.5H10.5C11.4946 4.5 12.4484 4.89509 13.1517 5.59835C13.8549 6.30161 14.25 7.25544 14.25 8.25C14.25 9.24456 13.8549 10.1984 13.1517 10.9017C12.4484 11.6049 11.4946 12 10.5 12H5.5V13.25H10.5C11.8261 13.25 13.0979 12.7232 14.0355 11.7855C14.9732 10.8479 15.5 9.57608 15.5 8.25C15.5 6.92392 14.9732 5.65215 14.0355 4.71447C13.0979 3.77678 11.8261 3.25 10.5 3.25Z" fill="#212529"/>
</svg>
`;

icons[
  "redo"
] = `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path
  d="M5.5 3.25H13.1156L10.8737 1.00875L11.75 0.125L15.5 3.875L11.75 7.625L10.8737 6.74062L13.1137 4.5H5.5C4.50544 4.5 3.55161 4.89509 2.84835 5.59835C2.14509 6.30161 1.75 7.25544 1.75 8.25C1.75 9.24456 2.14509 10.1984 2.84835 10.9017C3.55161 11.6049 4.50544 12 5.5 12H10.5V13.25H5.5C4.17392 13.25 2.90215 12.7232 1.96447 11.7855C1.02678 10.8479 0.5 9.57608 0.5 8.25C0.5 6.92392 1.02678 5.65215 1.96447 4.71447C2.90215 3.77678 4.17392 3.25 5.5 3.25Z"
  fill="#212529"
/>
</svg>`;

function undoHandler() {
  this.quill.history.undo();
}

function redoHandler() {
  this.quill.history.redo();
}

export default function Editor(props) {
  const [value, setValue] = useState();

  const modulesRef = useRef({
    toolbar: {
      handlers: { undo: undoHandler, redo: redoHandler },
      container: [
        ["undo", "redo"],
        [{ header: [] }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["bold", "italic", "underline", "strike", "code-block", "link"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        ["clean"],
      ],
    },
    clipboard: {
      matchVisual: false,
    },
  });

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modulesRef.current}
        id={props.eid}
        className="myeditor"
        preserveWhitespace
      />
      <h2>Tesat again</h2>
      <button onClick={() => props.deleteEditor(props.eid)}>Delete</button>
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: value }}
      ></div>
    </div>
  );
}
