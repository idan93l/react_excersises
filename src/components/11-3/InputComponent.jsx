import React from "react";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  render = () => {
    return (
      <div>
          <label>{this.props.name}</label>
          <input onChange={this.props.changer} id={this.props.idea} type="text"/>
      </div>
    );
  };
}

export default InputComponent;
