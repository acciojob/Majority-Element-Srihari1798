function majorityElement(nums) {
  let count = 0;
  let candidate = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
      if (count === 0) {
        candidate = nums[i];
      }
    }
  }
  return candidate;
}
