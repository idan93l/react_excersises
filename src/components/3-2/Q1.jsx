import Q1Title from "./Q1Title";
import Q1Input from "./Q1Input";

const Q1 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <Q1Title />
        <Q1Input />
    </div>
  );
};

export default Q1