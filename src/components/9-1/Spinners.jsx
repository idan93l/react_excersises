import React from "react";
import "./Spinners.css";

class Spinners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: "inline",
    };
  }

  visibility = () => {
    this.setState({ showing: "none" });
  }
  
  componentDidMount() {
    setTimeout(this.visibility, 2000)
  }

  componentDidUpdate() {
    console.log("update");
  }

  render = () => {
    return (
      <div className="Spinners">
        <div style={{ display: this.state.showing }} class="first"></div>
      </div>
    );
  };
}

export default Spinners;