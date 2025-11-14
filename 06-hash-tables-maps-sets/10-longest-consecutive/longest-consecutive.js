function longestConsecutiveSequence(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longest = Math.max(longest, currentSequence);
    }
  }

  return longest;
}

module.exports = longestConsecutiveSequence;
