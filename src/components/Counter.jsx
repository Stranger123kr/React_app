import { useRef, useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  let num = useRef(0);

  function handleClick() {
    // setNumber((number) => number + 1); // this is updated every time

    num.current++;
    console.log(num.current);
  }

  return (
    <>
      <div className="container">
        <h1 style={{ color: "white" }}>{number}</h1>
        <h1 style={{ color: "white" }}>{num.current}</h1>
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
}

export default Counter;
