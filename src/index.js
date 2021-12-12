import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/2-2/basics_of_jsx";
import Box1 from "./components/3-1/Box1"

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    // <HelloWorld />
    <Box1 />
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
