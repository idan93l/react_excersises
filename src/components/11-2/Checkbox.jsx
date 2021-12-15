import React from "react";

class Checkbox extends React.Component {
  constructor() {
    super();
  }

  render = () => {
    console.log(this.props.isChecked);
    return (
      <div>
      <input type="checkbox" defaultChecked={this.props.isChecked}/>
      <label>{this.props.genre}</label>
      </div>
    )
  }

}

export default Checkbox;