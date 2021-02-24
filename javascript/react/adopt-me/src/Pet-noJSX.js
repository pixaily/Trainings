import React from "react";

export default function Pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("H1", {}, name),
    React.createElement("H2", {}, animal),
    React.createElement("H2", {}, breed),
  ]);
}
