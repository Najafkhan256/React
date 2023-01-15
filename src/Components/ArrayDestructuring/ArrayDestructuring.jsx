import React from "react";
import { cars } from "../../data";

const [honda, tesla] = cars;
console.log(honda);

const {
  speedStatus: { topSpeed: hondaTopSpeed },
} = honda;
const {
  speedStatus: { topSpeed: teslaTopSpeed },
} = tesla;
const {
  colorByPopularity: [hondaTopColor],
} = honda;
const {
  colorByPopularity: [teslaTopColor],
} = tesla;
// console.log(hondaTopSpeed);
// console.log(teslaTopSpeed);
// const { model } = tesla;

// console.log(model, colorByPopularity[0], topSpeed, zeroToSixty);
// const honda = cars[0];
// const tesla = cars[1];
// console.log(cars);
// console.log(cars[0].model);
const ArrayDestructuring = () => {
  return (
    <>
      <div>Array Destructuring</div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top color</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColor}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColor}</td>
        </tr>
      </table>
    </>
  );
};

export default ArrayDestructuring;
