import "./style.css";
import { number } from "prop-types";
import React from "react";
import useCounter from "./useCounter";

export default function CountDown({ initialCount = 100, step = 1 }) {
  const [count, { decrement, reset }] = useCounter(initialCount, step);

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
