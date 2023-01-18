// const Fruit = ["Noodles", "Fruits", "Dry Fruits", "Walking", "Talking"];

function Fav({ Fruit }) {
  return (
    <ul>
      {Fruit.map((fruit, index) => {
        return <li key={index}>{fruit}</li>;
      })}
    </ul>
  );
}
export default Fav;
