import React, { useMemo, useState } from "react";

const TestMemoization = () => {
  function factorialOfNum(number) {
    console.log("Factorial n called", number);
    return number <= 0 ? 1 : number * factorialOfNum(number - 1);
  }

  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOfNum(number), [number]);

  function handleChange(e) {
    e.preventDefault();
    setNumber(Number(e.target.value));
  }

  function rerenderClick(e) {
    e.preventDefault();
    setInc((i) => i + 1);
  }
  return (
    <div>
      Factorial of:
      <input type="number" value={number} onChange={handleChange} /> is{" "}
      {factorial}
      <hr />
      <br />
      <button onClick={rerenderClick}>Rerender</button>
    </div>
  );
};

export default TestMemoization;
