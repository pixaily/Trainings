import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Ares",
      animal: "dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, { name: "Max", animal: "dog", breed: "Shepard" }),
    React.createElement(Pet, { name: "Rico", animal: "cat", breed: "Grey" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
