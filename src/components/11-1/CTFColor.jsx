import React from "react";

class CTFColor extends React.Component {
  constructor() {
    super();
  }

  render = () => {
    return (
      <div>
        <button
          onClick={(e) => this.props.kof(e.target.textContent)}
          style={{
            background: this.props.color,
            color: "white",
            fontSize: "20px",
            WebkitTextStroke: "0.7px black"
          }}
        >
          {this.props.color}
        </button>
      </div>
    );
  };
}

export default CTFColor;