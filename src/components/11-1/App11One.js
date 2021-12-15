import React from "react";
import CTFColor from "./CTFColor.jsx";
import "./styles.css";

const colors = ["blue", "red", "yellow", "green"];

class App11One extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedColor: ""
    };
  }

  printColorName = (color) => {
    this.setState({ selectedColor: color });
  };
  render = () => {
    return (
      <div className="App11One">
        <h1> The Color Is : <span style={{color: this.state.selectedColor}}>{this.state.selectedColor}</span></h1>
        {colors.map((btn, index) => {
          return <CTFColor kof={this.printColorName} key={index} color={btn} />;
        })}
      </div>
    );
  };
}

export default App11One;