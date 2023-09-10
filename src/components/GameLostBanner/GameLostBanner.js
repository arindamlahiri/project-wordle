import React from 'react';

import Banner from '../Banner';

function GameLostBanner({ answer, restartHandler }) {
	return (
		<Banner status="sad">
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
			<button onClick={restartHandler}>Try again?</button>
		</Banner>
	);
}

export default GameLostBanner;
