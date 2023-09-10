import React, { useEffect, useState } from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameWonBanner from '../GameWonBanner';
import GameLostBanner from '../GameLostBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';

function Game() {
	const [gameStatus, setGameStatus] = useState('playing');
	const [guesses, setGuesses] = useState([]);

	const [answer, setAnswer] = useState(() => sample(WORDS));

	useEffect(() => {
		console.log({ answer });
	}, [answer]);

	const handleGuessSubmit = (guess) => {
		setGuesses((prevGuesses) => [...prevGuesses, guess]);

		if (guess === answer) {
			setGameStatus('won');
		} else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
			setGameStatus('lost');
		}
	};

	const restartHandler = () => {
		setAnswer(sample(WORDS));
		setGuesses([]);
		setGameStatus('playing');
	};

	const BannerConfig = {
		won: (
			<GameWonBanner
				numOfGuesses={guesses.length}
				restartHandler={restartHandler}
			/>
		),
		lost: <GameLostBanner answer={answer} restartHandler={restartHandler} />
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
