import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 1);
    // setNumber((number) => number + 1); this is updated every time
  }

  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Counter;
