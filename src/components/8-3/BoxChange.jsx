import React from "react";
import "./BoxChange.css";

let counter = 0;

class BoxChange extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      colors: '',
      shape: 'square',
    };
  }
    
    changeColor = () => {
      const color = '#'+Math.floor(Math.random()*16777215).toString(16);
      this.setState({ colors: color });
      counter ++;
      return counter % 5 === 0 ? this.setState({ shape: "100px" }) : this.setState({ shape: "0px" })
    };

    componentDidMount() {
      setInterval(this.changeColor, 500)
    };

    componentDidUpdate() {
      console.log("update");
    }

    render = () => {
      return (
        <div className="BoxChange">
        <div style={{backgroundColor: this.state.colors, borderRadius: this.state.shape}} className="sizing"></div>
        </div>
      )
    }
}

export default BoxChange