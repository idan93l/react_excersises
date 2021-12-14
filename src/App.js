import "./App.css"
import faker, { fake } from "faker";
import HelloWorld from "./components/2-2/basics_of_jsx";
import Box1 from "./components/3-1/Box1";
import Quiz from "./components/3-2/Quiz";
import Button from "./components/4-1/button/Button.jsx";
import Increment from "./components/7-1/increment.jsx";
// import Card from "./components/4-2/Cards/Cards";
// import Card from "./components/6-1/Cards/Cards.jsx";

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

export default App;