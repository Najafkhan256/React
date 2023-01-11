const Favourite = ["Noodles", "Fruits", "Dry Fruits", "Walking", "Talking"];

function FavFruits() {
  return (
    <ul>
      {Favourite.map((fruit, index) => {
        return <li key={index}>{fruit}</li>;
      })}
    </ul>
  );
}
export default FavFruits;
