import { number } from "prop-types";
import React from "react";

import "./styles.css";
import { useCounter } from "../hooks";

export default function Countdown({ initialCount = 100, step = 1 }) {
  const [count, { decrement, reset }] = useCounter(initialCount, step);

  return (
    <>
      <p role="timer" aria-label="counter" className="countdown-number">
        {count}
      </p>
      <button className="countdown-button" onClick={decrement}>
        Countdown
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

Countdown.propTypes = {
  initialCount: number,
  step: number,
};
