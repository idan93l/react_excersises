import React from "react";

class BeforeSubmit extends React.Component {
  constructor() {
    super();
  }

  render = () => {
    return (
      <div>
          <h3 style={{display: `${this.props.visible}`}}>First name: {this.props.firstName}</h3>
          <h3>Last name: {this.props.lastName}</h3>
          <h3>Favorite music genre: {this.props.genre}</h3>
          <h3>About: {this.props.personalInfo}</h3>
          <button>Back</button>
          <input type="submit" value="Submit"/>
      </div>
    );
  };
}

export default BeforeSubmit;