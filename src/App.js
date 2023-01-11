import "./App.css";
import Heading from "./components/Heading";
import Fav from "./components/FavFruits";
import PiValues from "./components/PiValues";
import ImportExportSolution from "./components/importExportChallenge/ChallengeSol";

const Fruit = ["Mango", "Banana", "Pine apple", "Apple"];
const Hobbies = ["Speaking", "Reading", "Walking"];
function App() {
  return (
    <div className="App">
      <Heading text="My favorites Fruits" />
      <Fav Fruit={Fruit} />
      <Heading text="My Hobbies" />
      <Fav Fruit={Hobbies} />
      <Heading text="Import and Exports in ES6" />
      <PiValues />
      <ImportExportSolution />
    </div>
  );
}

export default App;
