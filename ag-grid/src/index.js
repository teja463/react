import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import App from './App';
// import App from './AppOld';
// import App from "./AppQuillInbuiltModules";
// import App from "./AppQuillInbuiltModulesUndo";
// import App from "./AppQuillCustomToolbar";
import App from './details-editor/App';
// import App2 from "./AppQuill2";

function Home() {
  return <div>
    <Link to={'/app'}>App</Link>
    <Link to={'/another'}>Another</Link>
  </div>;
}

function Another() {
  return <div>Another</div>;
}

render(
  <Router>
    {/* <Switch> */}
      <Route path="/">
        <Home />
      </Route>
      <Route path="/app">
        <App />
      </Route>
      <Route path='/another'>
        <Another />
      </Route>
    {/* </Switch> */}
  </Router>,
  document.getElementById("root")
);
