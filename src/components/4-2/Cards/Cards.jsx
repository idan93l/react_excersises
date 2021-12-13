import "./Cards.css";

const Card = (props) => {
  return (
    <div className="flex card">
      <img alt="image" src={props.picture}/>
        <h1>{props.randomH1}</h1>
        <h3>{props.randomH2}</h3>
      <div className="flex links">
        <a href="#">{props.randomWord1}</a>
        <a href="#">{props.randomWord2}</a>
      </div>
    </div>
  );
};

export default Card;
