import React from "react";

class TextAreaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  render = () => {
    return (
      <div>
        <label>Tell us about yourself:</label>
        <textarea onChange={this.props.changer} id={this.props.idea} rows="4" cols="50" maxLength="200">
        </textarea>
      </div>
    );
  };
}

export default TextAreaComponent;
