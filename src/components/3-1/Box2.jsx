import Box3 from "./Box3";

const Box2 = () => {
  return (
    <div
      style={{
        height: "90vh",
        width: "95vw",
        backgroundColor: "skyblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box3 />
    </div>
  );
};

export default Box2;