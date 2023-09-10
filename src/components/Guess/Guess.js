import React from 'react';

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ value, answer }) {
	const guessResult = checkGuess(value, answer);

	const arrayToMap = guessResult ? guessResult : range(5);

	return (
		<p className="guess">
			{arrayToMap.map((result, index) => (
				<span key={index} className={`cell ${result.status || ''}`}>
					{guessResult ? result.letter : ''}
				</span>
			))}
		</p>
	);
}

export default Guess;
