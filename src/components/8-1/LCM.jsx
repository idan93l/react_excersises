import React from "react";
import "./LCM.css";

class LCM extends React.Component {
  state = {favoriteColor: "blue"};

  changeFavoriteColor = () => {
    this.setState({ favoriteColor: "red" });
  };
  
  componentDidMount() {
    setTimeout(this.changeFavoriteColor, 1000)
  };

  componentDidUpdate() {
    const color = document.getElementById('color');
    color.innerHTML = `<h1>My new favortie color is ${this.state.favoriteColor}<h1/>`
  }


  render = () => {
    return (
      <div className="LCM">
        <h1>My favorite color is blue</h1>
        <div id="color"></div>
      </div>
    );
  };
}
export default LCM;