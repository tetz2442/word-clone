import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import { COMPLETED_LOST, COMPLETED_WON, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ guessList, completionStatus, setCompletionStatus }) {
  useEffect(() => {
    if (guessList.find(g => g.label === answer)) {
      setCompletionStatus(COMPLETED_WON);
    } else if (guessList.length === NUM_OF_GUESSES_ALLOWED) {
      setCompletionStatus(COMPLETED_LOST);
    }
  }, [guessList]);

  const guessesWithStatus = guessList.map(guess => {
    console.log(guess.label)
    return {
      ...guess,
      label: checkGuess(guess.label, answer)
    }
  });

  let banner;
  if (completionStatus === COMPLETED_WON) {
    banner = (
      <Banner variant="happy">
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>{guessList.length} guess{guessList.length > 1 ? 'es' : ''}</strong>.
          </p>
        </Banner>
      );
  } else if (completionStatus === COMPLETED_LOST) {
    banner = (
      <Banner variant="sad">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </Banner>
    );
  }

  return (
    <>
    <GuessResults guessList={guessesWithStatus}/>
    {banner}
    </>
  );
}

export default Game;
