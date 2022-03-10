import "./style.css";
import { number } from "prop-types";
import React from "react";

export default function CountDown({ initialCount = 100, step = 1 }) {
  const [count, setCount] = React.useState(initialCount);

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);

  return (
    <>
      <p className="countdown-number">{count}</p>
      <button className="countdown-button" onClick={decrement}>
        CountDown
      </button>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
    </>
  );
}

CountDown.propTypes = {
  initialCount: number,
  step: number,
};
