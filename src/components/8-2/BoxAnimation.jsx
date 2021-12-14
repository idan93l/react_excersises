import React from "react";
import "./BoxAnimation.css";

class BoxAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: "in"
    };
  }

  changeAnimation = () => {
    this.setState({ animation: "out" });
  };
  
  componentDidMount() {
    setTimeout(this.changeAnimation, 4000)
  };


  render = () => {
    const { size } = this.props;
    return (
      <div className="BoxAnimation">
        <div style={{width: size, height: size}} id="box11" className={this.state.animation}></div>
      </div>
    );
  };
}

export default BoxAnimation;