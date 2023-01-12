// const numArr = [3, 55, 6, 2, 44, 9];

function MapFilterReduce() {
  /*   // Map:======================
  function newMapArr(x) {
    return x * 2;
  }
  const mapArr = numArr.map(newMapArr);
  console.log(mapArr); */

  // ForEach:===========================
  /*   const newForArr = [];
  function newForEachArr(x) {
    return newForArr.push(x * 3);
  }
  numArr.forEach(newForEachArr);
  console.log(newForArr); */

  // Filter:=============================
  /*   const newArr = numArr.filter(function (num) {
    return num > 10;
  });
  console.log(newArr); */
  /*   const newArr = [];
  numArr.forEach(function (num) {
    if (num < 10) {
      return newArr.push(num);
    }
  });
  console.log(newArr); */

  //   Reduce:===========================
  //   const numArr = [3, 55, 6, 2, 44, 9];

  //  with forEach method====================
  /*   var newNumber = 0;
  numArr.forEach(function (currentNumber) {
    return (newNumber = newNumber + currentNumber);
  });
  console.log(newNumber); */
  /*   const newNumber = numArr.reduce(function (acc, curr) {
    return acc + curr;
  });
  console.log(newNumber); */

  //   Find:=============================
  //   const numArr = [3, 55, 6, 2, 44, 9];
  /*  const newNumber = numArr.find(function (num) {
    return num > 10;
  });
  console.log(newNumber); */

  // findIndex
  /*   const newNumber = numArr.findIndex(function (num) {
    return num > 10;
  });
  console.log(newNumber); */
  return <h2>MapFilterReduce</h2>;
}

export default MapFilterReduce;
