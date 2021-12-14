import React from "react";
import "./Toggle.css";

class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      isTextVisible: false
    };
  }

  // toggleText = () => {
  //   this.setState({ isTextVisible: !this.state.isTextVisible });
  // };

  render = () => {
    return (
      <div className="container">
        <button
          onClick={() =>
            this.setState({ isTextVisible: !this.state.isTextVisible })
          }
        >
          Make It Happen!
        </button>
        {this.state.isTextVisible && (
          <div className="box">
          </div>
        )}
      </div>
    );
  };
}

export default Toggle;