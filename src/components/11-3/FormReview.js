import React from "react";
import InputComponent from "./InputComponent.jsx";
import SelectComponent from "./SelectComponent.jsx";
import TextAreaComponent from "./TextAreaComponent.jsx";
import BeforeSubmit from "./BeforeSubmit.jsx";

class FormReview extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      genre: '',
      personalInfo: '',
      visible: 'none'
    }
  }

  changer = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  isVisible = () => {
    this.setState({visible: 'inline'});
  }

  render = () => {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.genre);
    console.log(this.state.personalInfo);
    return (
      <div
        style={{
          height: "70vh",
          width: "50vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="ui segment"
      >
        <h1>Join us!</h1>
        <form className="ui form">
          <InputComponent changer={this.changer} value={this.state.firstName} idea="firstName" name="First name:" />
          <InputComponent changer={this.changer} value={this.state.lastName} idea="lastName" name="Last name:" />
          <SelectComponent changer={this.changer} value={this.state.genre} idea="genre"/>
          <TextAreaComponent changer={this.changer} value={this.state.personalInfo} idea="personalInfo"/>
          <button onClick={this.isVisible}>Continue</button>
          <BeforeSubmit firstName={this.state.firstName} lastName={this.state.lastName} genre={this.state.genre} personalInfo={this.state.personalInfo} />
        </form>
      </div>
    );
  };
}

export default FormReview;
