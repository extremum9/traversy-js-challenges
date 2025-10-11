function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const difference1 = [...set1].filter((num) => !set2.has(num));
  const difference2 = [...set2].filter((num) => !set1.has(num));

  return [...difference1, ...difference2];
}

module.exports = symmetricDifference;
