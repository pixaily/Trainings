const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
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
