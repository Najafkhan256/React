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
    <div style={{ backgroundColor: "red", width: "100px" }}>
      <props.comp />
    </div>
  );
}
function HighOrderGreenComp(props) {
  return (
    <div>
      <div style={{ backgroundColor: "green", width: "100px" }}>
        <props.comp />
      </div>
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
