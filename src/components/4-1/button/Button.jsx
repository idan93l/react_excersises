import "./button.css"

const Button = (props) => {
  return (
    <button className={props.bold}> {props.content} </button>
  );
}

export default Button