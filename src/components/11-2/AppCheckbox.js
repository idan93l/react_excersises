import React from "react";
import Checkbox from "./Checkbox.jsx";

const musicGenre = ["Rock", "Grunge", "funk", "Jazz"];

class AppCheckbox extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedGenre: ["Rock", "Grunge", "funk", "Jazz"],
      isChecked: false,
    };
  }

  // updateGenreInfo = (genre) => {
  //   this.setState({ selectedGenre: genre });
  // };

  // toggleChange = () => {
  //   this.setState({
  //     isChecked: !this.state.isChecked,
  //   });
  // }

  // toCheck = () => {
  //   if (this.state.selectedGenre === "Rock" || this.state.selectedGenre === "Grunge") {
  //     return true;
  //     // this.setState({ isChecked: true });
  //   } else {
  //     return false;
  //     // this.setState({ isChecked: false });
  //   }
  // };

  render = () => {
    return (
      <div>
        {musicGenre.map((genre, index) => {
          return (
            <Checkbox isChecked={genre === 'Rock' || genre === 'Grunge'} key={index} genre={genre} />
          );
        })}
      </div>
    );
  };
}

export default AppCheckbox;
