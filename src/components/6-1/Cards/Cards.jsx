import React from "react";
import "./Cards.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, title, description } = this.props;
    return (
        <div className="card">
          <div className="img">
            <img src={url} alt={title} />
          </div>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <div className="links">
            <a href="#">Explore</a>
            <a href="#">Share</a>
          </div>
        </div>
    );
  }
}

// const Card = (props) => {
//   return (
//     <div className="flex card">
//       <img alt="image" src={props.picture}/>
//         <h1>{props.randomH1}</h1>
//         <h3>{props.randomH2}</h3>
//       <div className="flex links">
//         <a href="#">{props.randomWord1}</a>
//         <a href="#">{props.randomWord2}</a>
//       </div>
//     </div>
//   );
// };

export default Card;
