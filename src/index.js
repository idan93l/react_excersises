import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/2-2/basics_of_jsx";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    HelloWorld()
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
