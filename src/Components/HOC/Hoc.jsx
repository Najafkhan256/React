import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}

function HighOrderRedComp(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: "red", width: "100px" }}>
        <props.comp />
      </h2>
    </div>
  );
}
function HighOrderGreenComp(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: "green", width: "100px" }}>
        <props.comp />
      </h2>
    </div>
  );
}

const Hoc = () => {
  return (
    <div>
      <h3>Hoc</h3>
      <HighOrderRedComp comp={Counter} />
      <HighOrderGreenComp comp={Counter} />
    </div>
  );
};

export default Hoc;
