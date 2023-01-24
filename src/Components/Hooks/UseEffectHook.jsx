import React, { useEffect, useState } from "react";

// useEffect work as componentDidMount()
// and componentDidUpdate()
// and componentWillUnmount()
const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  /*   useEffect(() => {
    console.log(count);
  }, [count === 5]); */

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h2>Use Effect Hook ..... {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default UseEffectHook;
