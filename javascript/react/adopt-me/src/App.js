const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Ares"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h3", {}, "Labrador"),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
