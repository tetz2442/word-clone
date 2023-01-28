import React from 'react';

import Game from '../Game';
import GuessInput  from '../GuessInput';
import Header from '../Header';

function App() {
  const [completionStatus, setCompletionStatus] = React.useState(null);
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmit(guess) {
    const newGuess = {
      id: Math.random(),
      label: guess,
    }
    setGuessList([...guessList, newGuess ]);
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game guessList={guessList} completionStatus={completionStatus} setCompletionStatus={setCompletionStatus} />
        <GuessInput onSubmit={handleSubmit} disabled={!!completionStatus}/>
      </div>
    </div>
  );
}

export default App;
