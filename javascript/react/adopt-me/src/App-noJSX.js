import React from "react";
import { render } from "react-dom";
import Pet from "./Pet-noJSX ";
import SearchParams from "./SearchParams";

const App = () => {
  return React.createElement(
    "div",
    {
      id: "something-important",
    },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(SearchParams),
      React.createElement(Pet, {
        name: "Roko",
        animal: "Dog",
        breed: "Bolonka",
      }),
      React.createElement(Pet, {
        name: "Riko",
        animal: "Cat",
        breed: "Angor",
      }),
      React.createElement(Pet, {
        name: "Max",
        animal: "Dog",
        breed: "German Shepard",
      }),
      React.createElement(Pet, {
        name: "Ares",
        animal: "Dog",
        breed: "Labrador",
      }),
    ]
  );
};

render(<App />, document.getElementById("root"));
