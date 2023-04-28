import React, { useState } from "react";
import Editor from "./Editor";
import Details from "./Details";

export default function DetailsEditor(props) {
  const [value, setValue] = useState();

  return (
    <div>
      <Details summary="" showExpanded>
        <Editor value={value} setValue={setValue} eid={props.eid} />
      </Details>
    </div>
  );
}
