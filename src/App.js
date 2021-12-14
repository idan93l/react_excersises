import "./App.css";
import faker, { fake } from "faker";
import HelloWorld from "./components/2-2/basics_of_jsx";
import Box1 from "./components/3-1/Box1";
import Quiz from "./components/3-2/Quiz";
import Button from "./components/4-1/button/Button.jsx";
// import Card from "./components/4-2/Cards/Cards";
// import Card from "./components/6-1/Cards/Cards.jsx";
import Increment from "./components/7-1/increment.jsx";
import Toggle from "./components/7-2/Toggle.jsx";
import LCM from "./components/8-1/LCM.jsx";
import BoxAnimation from "./components/8-2/BoxAnimation";
import BoxChange from "./components/8-3/BoxChange.jsx";

// const App = () => {
//   return (
//     <div>
//     {/* <div className="size flexy"> */}
//       {/* --------2-2------------- */}
//       {/* <HelloWorld /> */}
//       {/* ----------3-1------------ */}
//       {/* <Box1 /> */}
//       {/* ----------3-2------------- */}
//       {/* <Quiz /> */}
//       {/* -------------4-1------------ */}
//       {/* <Button bold="boldButton" content="important" />
//     <Button content="Not Important" /> */}
//     {/* ----------4-2---------------- */}
//       {/* <Card
//         picture='https://picsum.photos/435/300'
//         randomH1={faker.lorem.word()}
//         randomH2={faker.lorem.sentence()}
//         randomWord1={faker.lorem.word()}
//         randomWord2={faker.lorem.word()}
//       />
//       <Card
//         picture='https://picsum.photos/434/300'
//         randomH1={faker.lorem.word()}
//         randomH2={faker.lorem.sentence()}
//         randomWord1={faker.lorem.word()}
//         randomWord2={faker.lorem.word()}
//       />
//       <Card
//         picture='https://picsum.photos/433/300'
//         randomH1={faker.lorem.word()}
//         randomH2={faker.lorem.sentence()}
//         randomWord1={faker.lorem.word()}
//         randomWord2={faker.lorem.word()}
//       /> */}
//     </div>
//   );
// };

// -----------------6-1-----------------------
// function App() {
//   const data = [
//     {
//       id: 0,
//       url: "https://picsum.photos/435/300",
//       title: "texty",
//       description: "hey"
//     },
//     {
//       id: 1,
//       url: "https://picsum.photos/435/301",
//       title: "lawd",
//       description: "you"
//     },
//     {
//       id: 2,
//       url: "https://picsum.photos/435/302",
//       title: "yes",
//       description: "there"
//     }
//   ];

//   return (
//     <div className="size flexy">
//       {data.map((card) => {
//         return (
//           <Card
//             key={card.id}
//             url={card.url}
//             title={card.title}
//             description={card.description}
//           />
//         );
//       })}
//     </div>
//   );
// }

// -----------7-1------------------
// const App = () => {
//   return (
//     <Increment />
//   );
// }

//  ----------7-2------------------
// const App = () => {
//   return (
//     <Toggle />
//   );
// }

// --------------8-1-----------------
// const App = () => {
//   return (
//     <LCM />
//   );
// }

// --------------8-2-----------------
// const App = () => {
//   const boxArray = [
//     {
//       id: 0,
//       size: "200px",
//     },
//     {
//       id: 1,
//       size: "300px",
//     },
//     {
//       id: 2,
//       size: "400px",
//     },
//   ];
//   return (
//     <div>
//       {boxArray.map((box) => {
//         return <BoxAnimation key={box.id} size={box.size} />;
//       })}
//     </div>
//   );

  // return (
  //   <div>
  //     {/* <BoxAnimation /> */}
  //   <BoxAnimation size="200px" />
  //   <BoxAnimation size="300px" />
  //   <BoxAnimation size="400px" />
  //   </div>
  // );
// };

// -------------------8-3-------------------

const App = () => {
  return (
    <BoxChange />
  );
}

export default App;