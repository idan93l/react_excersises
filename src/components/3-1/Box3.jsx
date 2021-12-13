import Box4 from "./Box4";

const Box3 = () => {

  return (
    <div
      style={{
        height: "80vh",
        width: "90vw",
        backgroundColor: "lightpink",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box4 />
      <Box4 />
    </div>
  );
};

export default Box3;