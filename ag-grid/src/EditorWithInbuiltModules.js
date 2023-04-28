import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor(props) {
  const [value, setValue] = useState();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
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

    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

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
