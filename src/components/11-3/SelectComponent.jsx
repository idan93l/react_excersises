import React from "react";

const musicGenre = ["Rock", "Grunge", "funk", "Jazz"];

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  render = () => {
    return (
      <div>
        <label>Favorite music genre:</label>
        <select onChange={this.props.changer} id={this.props.idea} className="ui selectable" name="Genre">
        <option value="" selected disabled hidden>Select genre</option>
          {musicGenre.map((genre) => {
            return <option value={genre}>{genre}</option>;
          })}
        </select>
      </div>
    );
  };
}

export default SelectComponent;
