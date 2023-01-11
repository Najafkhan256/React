import pi, { doublePi, tripplePi } from "./ES6ImportExport";
// OR
// import * as pi from "./ES6ImportExport";
// console.log(pi);

function PiValues() {
  return (
    <div>
      <p>{pi}</p>
      <p>{doublePi()}</p>
      <p>{tripplePi()}</p>
      {/*  <p>{pi}</p>
      <p>{pi.doublePi()}</p>
      <p>{pi.tripplePi()}</p> */}
    </div>
  );
}
export default PiValues;
