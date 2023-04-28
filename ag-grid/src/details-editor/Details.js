import React, { useState } from "react";

export default function Details(props) {
  const [show, setShow] = useState(props.showExpanded);
  const style = { display: `${show ? "block" : "none"}` };
  
  function toggleSummary(e) {
    e.preventDefault();
    setShow(!show);
  }
  
  return (
    <details open={show}>
      <summary onClick={toggleSummary}>{props.summary}</summary>
      <div style={style}>{props.children}</div>
    </details>
  );
}
