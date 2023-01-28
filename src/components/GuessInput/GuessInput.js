import React from 'react';

function GuessInput({ onSubmit, disabled }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if(guess.length === 5) {
      onSubmit(guess);
      setGuess('');
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess">Enter guess</label>
      <input
        id="guess"
        type="text"
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
        maxLength="5"
        disabled={disabled}
      />
    </form>
  )
}

export default GuessInput;