function getHash(word) {
  return [...word].sort().join('');
}

function anagramGrouping(words) {
  return [
    ...words
      .reduce((map, word) => {
        const hash = getHash(word);
        if (map.has(hash)) {
          map.get(hash).push(word);
        } else {
          map.set(hash, [word]);
        }
        return map;
      }, new Map())
      .values()
  ];
}

module.exports = anagramGrouping;
