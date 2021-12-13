import QuizTitle from "./QuizTitle";
import Q1 from "./Q1";
import Q2 from "./Q2";

const Quiz = () => {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'skyblue',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
        <div style=
        {{
          height: '50vh',
          width: '50vw',
          border: '3px solid royalblue',
          color: 'royalblue',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <QuizTitle />
          <Q1 />
          <Q2 />
        </div>
    </div>
  )
}

export default Quiz