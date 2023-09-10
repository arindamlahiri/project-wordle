import React, { useState } from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guesses, handleGuessSubmit }) {
	const [guess, setGuess] = useState('');

	const handleChange = (event) => {
		setGuess(event.target.value.toUpperCase());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ guess });
		setGuess('');

		if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
			window.alert('You already guessed 6 times!');
			return;
		}

		handleGuessSubmit(guess);
	};

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
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
