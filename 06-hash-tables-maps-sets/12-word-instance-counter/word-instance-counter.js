function wordInstanceCounter(str, word) {
	const formattedWord = word.toLowerCase();
	
	let counter = 0;
	for (const match of str.matchAll(/[a-z]+/gi)) {
		if (formattedWord === match[0].toLowerCase()) {
			counter++;
		}
	}
	
	return counter;
}

module.exports = wordInstanceCounter;
