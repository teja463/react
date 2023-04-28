import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";

export default function Test() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();

  return (
    <div>
      <div className="form-group col-md-12 editor">
        <label>Description</label>
        <EditorToolbar toolbarId={"t1"} />
        <ReactQuill
          theme="snow"
          value={value1}
          onChange={setValue1}
          placeholder={"Write ."}
          modules={modules("t1")}
          formats={formats}
        />
      </div>
      <br />
      <div className="form-group col-md-12 editor">
        <label> Additional Information </label>
        <EditorToolbar toolbarId={"t2"} />
        <ReactQuill
          theme="snow"
          value={value2}
          onChange={setValue2}
          placeholder={"Write something"}
          modules={modules("t2")}
          formats={formats}
        />
      </div>
      <br />
    </div>
  );
}
