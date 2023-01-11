import "./App.css";
import Heading from "./components/Heading";
import Fav from "./components/FavFruits";

const Fruit = ["Mango", "Banana", "Pine apple", "Apple"];
const Hobbies = ["Speaking", "Reading", "Walking"];
function App() {
  return (
    <div className="App">
      <Heading text="My favourite Fruits" />
      <Fav Fruit={Fruit} />
      <Heading text="My Hobbies" />
      <Fav Fruit={Hobbies} />
    </div>
  );
}

export default App;
