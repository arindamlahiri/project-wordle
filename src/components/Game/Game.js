import React, { useState } from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameWonBanner from '../GameWonBanner';
import GameLostBanner from '../GameLostBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [gameStatus, setGameStatus] = useState('playing');
	const [guesses, setGuesses] = useState([]);

	const handleGuessSubmit = (guess) => {
		setGuesses((prevGuesses) => [...prevGuesses, guess]);

		if (guess === answer) {
			setGameStatus('won');
		} else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
			setGameStatus('lost');
		}
	};

	const BannerConfig = {
		won: <GameWonBanner numOfGuesses={guesses.length} />,
		lost: <GameLostBanner answer={answer} />
	};

	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput
				handleGuessSubmit={handleGuessSubmit}
				gameStatus={gameStatus}
			/>
			{gameStatus !== 'playing' && BannerConfig[gameStatus]}
		</>
	);
}

export default Game;
