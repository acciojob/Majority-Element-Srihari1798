//your code here
// function majorityElement(nums) {
//   let count = 0;
//   let candidate = null;

//   for (let num of nums) {
//     if (count === 0) {
//       candidate = num;
//     }

//     count += (num === candidate) ? 1 : -1;
//   }

//   return candidate;
// }
function majorityElement(nums) {
  const countMap = {};
  const n = nums.length;
  
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    countMap[num] = (countMap[num] || 0) + 1;
    
    if (countMap[num] > n / 2) {
      return num;
    }
  }
  
  return null;
}

