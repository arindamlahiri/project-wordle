import React from 'react';

import Banner from '../Banner';

function GameWonBanner({ numOfGuesses, restartHandler }) {
	return (
		<Banner status="happy">
			<p>
				<strong>Congratulations!</strong> Got it in{' '}
				<strong>
					{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
				</strong>
				.
			</p>
			<button onClick={restartHandler}>Play again</button>
		</Banner>
	);
}

export default GameWonBanner;
