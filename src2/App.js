import React from "react";
import ReactDOM from "react-dom";
import reactTestRenderer from "react-test-renderer";

import EditablePage from "./editablePage";

const rootElement = document.getElementById("root");
console.log(rootElement);

ReactDOM.render(
  <React.StrictMode>
    <h1 className="Logo">Typehub Article Writer</h1>
    <p className="Intro">
      Helloo{" "}
      <span role="img" aria-label="greetings" className="Emoji">
        👋
      </span>{" "}
      You can add content below. Type <span className="Code">/</span> to see
      available elements.
    </p>

    <EditablePage />
    <button className="btn btn-primary" id="subartl" type="submit">
      Submit Article
    </button>
  </React.StrictMode>,
  rootElement
);
