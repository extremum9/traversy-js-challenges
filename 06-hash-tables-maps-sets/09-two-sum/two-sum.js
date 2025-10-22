function twoSum(nums, target) {
  const lib = new Map();
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const remainder = target - num;
    if (lib.has(remainder)) {
      return [lib.get(remainder), index];
    }
    lib.set(num, index);
  }
  return [];
}

module.exports = twoSum;
