import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const columns = range(5).map((_, i) => {
    return {
      id: guess?.id,
      guess: guess ? guess.label[i] : null,
    };
  });

  return (
    <p className="guess">
      {columns.map(({guess}, i) => (
        <span key={`${guess?.letter}${i}`} className={`cell ${guess?.status}`}>
          {guess?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
