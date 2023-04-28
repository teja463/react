import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor(props) {
  const [value, setValue] = useState();

  const toolbarOptions = [
    // ["undo", "redo"],
    [{ header: [] }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline", "strike", "code-block", "link"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["clean"],
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
      <h2>{props.sample}</h2>
      <h3>teaste</h3>
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: value }}
      ></div>
    </div>
  );
}
