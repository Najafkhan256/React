import "./App.css";
// import ArrayDestructuring from "./components/ArrayDestructuring/ArrayDestructuring";
import EventHandling from "./components/EventHandling/EventHandling";
// import { Counter } from "./components/Counter/Counter";
// import { TimeWithState } from "./components/TimeWithState/TimeWithState";
// import DeclarativeImperative from "./components/DeclarativeImperative/DeclarativeImperative";
// import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
// import Form from "./components/ConditionalRendering/Form";
// import EmojiMedia from "./components/EmojiMedia/EmojiMedia";
// import Heading from "./components/Heading";
// import Avatar from "./components/ReactProps/Avatar";
// import Fav from "./components/FavFruits";
// import PiValues from "./components/PiValues";
// import ImportExportSolution from "./components/importExportChallenge/ChallengeSol";
// import ReactProps from "./components/ReactProps/ReactProps";
// import MapFilterReduce from "./components/MapFilterReduce/MapFilterReduce";

// const Fruit = ["Mango", "Banana", "Pine apple", "Apple"];
// const Hobbies = ["Speaking", "Reading", "Walking"];
function App() {
  return (
    <div className="App">
      {/* <Heading text="My favorites Fruits" />
      <Fav Fruit={Fruit} />
      <Heading text="My Hobbies" />
      <Fav Fruit={Hobbies} />
      <Heading text="Import and Exports in ES6" />
      <PiValues />
      <ImportExportSolution /> 
       <Heading text="Props in React" /> 
       <Avatar img="https://picsum.photos/200/300" />
      <ReactProps /> 
       <MapFilterReduce /> 
      <EmojiMedia />
      <ConditionalRendering />
      <Form />
      <DeclarativeImperative />
      <Counter />
      <TimeWithState />
      <ArrayDestructuring />
      */}
      <EventHandling />
    </div>
  );
}

export default App;
