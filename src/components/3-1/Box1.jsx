import Box2 from "./Box2";

const Box1 = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "lightGreen",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box2 />
    </div>
  );
};

export default Box1;