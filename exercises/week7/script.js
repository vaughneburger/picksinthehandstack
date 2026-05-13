
		const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        document.body.appendChild(p);
        document.body.appendChild(p2);
        document.body.appendChild(p3);


        
        
        // ———————————————————
		// CHALLENGE 1
		// Write a “while” loop that logs to the console every number from -50 to 50
		let num = -50;


        while (num <= 50) {
            p.innerHTML += `${num}<br>`;
            num++;

        }



		// ———————————————————
		// CHALLENGE 2
		// Write a “for” loop that logs to the console every OTHER number from 0 to 100
        for ( let i=0; i<=100; i++ ) {
            if ( i % 2 === 0 ) {
                p2.innerHTML += `${i}<br>`;
            }
        }

		// ———————————————————
		// CHALLENGE 3
		// Write a “forEach” loop that logs every item from the following array
		let puzzleGames = [
			'baba is you',
			'return of the obra dinn',
			'stephen’s sausage roll',
			'the witness',
			'chants of sennaar'
		];

        puzzleGames.forEach(game => {
            p3.innerHTML += `${game}<br>`;
        });