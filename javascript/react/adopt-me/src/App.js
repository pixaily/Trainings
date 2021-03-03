import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Ares" animal="dog" breed="Labrador" />
      <Pet name="Max" animal="dog" breed="Shepard" />
      <Pet name="Rico" animal="dog" breed="Grey" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
