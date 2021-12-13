import "./App.css"
import faker, { fake } from "faker";
import HelloWorld from "./components/2-2/basics_of_jsx";
import Box1 from "./components/3-1/Box1";
import Quiz from "./components/3-2/Quiz";
import Button from "./components/4-1/button/Button.jsx";
import Card from "./components/4-2/Cards/Cards";

const App = () => {
  return (
    <div className="size flexy">
      {/* 2-2 */}
      {/* <HelloWorld /> */}
      {/* 3-1 */}
      {/* <Box1 /> */}
      {/* 3-2 */}
      {/* <Quiz /> */}
      {/* 4-1 */}
      {/* <Button bold="boldButton" content="important" />
    <Button content="Not Important" /> */}
      <Card
        picture='https://picsum.photos/435/300'
        randomH1={faker.lorem.word()}
        randomH2={faker.lorem.sentence()}
        randomWord1={faker.lorem.word()}
        randomWord2={faker.lorem.word()}
      />
      <Card
        picture='https://picsum.photos/434/300'
        randomH1={faker.lorem.word()}
        randomH2={faker.lorem.sentence()}
        randomWord1={faker.lorem.word()}
        randomWord2={faker.lorem.word()}
      />
      <Card
        picture='https://picsum.photos/433/300'
        randomH1={faker.lorem.word()}
        randomH2={faker.lorem.sentence()}
        randomWord1={faker.lorem.word()}
        randomWord2={faker.lorem.word()}
      />
    </div>
  );
};

export default App;
