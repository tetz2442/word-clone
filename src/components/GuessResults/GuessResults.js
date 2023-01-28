import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "../Guess/Guess";


function GuessResults({ guessList, answer }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED).map((_, i) => {
    return {
      id: Math.random(),
      guess: guessList[i]
    }
  });

  console.log(rows)

  return (
    <div className="guess-results">
      {rows.map(({id, guess}) => (
        <Guess key={id} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
