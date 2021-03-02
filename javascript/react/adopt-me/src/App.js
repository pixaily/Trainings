const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Ares", animal: "dog", breed: "Labrador", }),
    React.createElement(Pet, { name: "Max", animal: "dog", breed: "Shepard" }),
    React.createElement(Pet, { name: "Rico", animal: "cat", breed: "Grey" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
