import React, { useState, useMemo, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const icons = ReactQuill.Quill.import("ui/icons");

icons[
  "undo"
] = `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 3.25H2.88438L5.12625 1.00875L4.25 0.125L0.5 3.875L4.25 7.625L5.12625 6.74063L2.88625 4.5H10.5C11.4946 4.5 12.4484 4.89509 13.1517 5.59835C13.8549 6.30161 14.25 7.25544 14.25 8.25C14.25 9.24456 13.8549 10.1984 13.1517 10.9017C12.4484 11.6049 11.4946 12 10.5 12H5.5V13.25H10.5C11.8261 13.25 13.0979 12.7232 14.0355 11.7855C14.9732 10.8479 15.5 9.57608 15.5 8.25C15.5 6.92392 14.9732 5.65215 14.0355 4.71447C13.0979 3.77678 11.8261 3.25 10.5 3.25Z" fill="#212529"/>
</svg>
`;

export default function Editor(props) {
  const [value, setValue] = useState();

  function imageHandler() {
    this.quill.history.undo();
  }
  const modules = useMemo(
    () => ({
      toolbar: {
        handlers: { undo: imageHandler },
        container: [
          ["undo", "bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"],

          // [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: "ordered" }, { list: "bullet" }],
          // [{ script: "sub" }, { script: "super" }], // superscript/subscript
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          // [{ direction: "rtl" }], // text direction

          // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          // [{ font: [] }],
          [{ align: [] }],
          ,
        ],
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        id={props.eid}
        className="myeditor"
        preserveWhitespace
      />
      <button onClick={() => props.deleteEditor(props.eid)}>Delete</button>
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: value }}
      ></div>
    </div>
  );
}
