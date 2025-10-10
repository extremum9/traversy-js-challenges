function wordFrequencyCounter(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s]|_/g, '')
    .split(' ')
    .reduce(
      (map, word) =>
        word !== '' ? map.set(word, (map.get(word) ?? 0) + 1) : map,
      new Map()
    );
}

module.exports = wordFrequencyCounter;
