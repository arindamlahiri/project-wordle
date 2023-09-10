import React, { useState } from 'react';

function GuessInput({ handleGuessSubmit, gameStatus }) {
	const [guess, setGuess] = useState('');

	const handleChange = (event) => {
		setGuess(event.target.value.toUpperCase());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setGuess('');

		handleGuessSubmit(guess);
	};

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
				disabled={gameStatus !== 'playing'}
				id="guess-input"
				type="text"
				value={guess}
				onChange={handleChange}
				maxLength={5}
				pattern="[A-Z]{5}"
				title="5 letter word"
			/>
		</form>
	);
}

export default GuessInput;
