/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  if (nums.length < 3) return res;

  nums.sort((a, b) => a - b); // sort ascending

  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    // skip duplicate first elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // small optimization: if current number > 0, further sums cannot be 0
    if (nums[i] > 0) break;

    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);

        // skip duplicates for l and r
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else { // sum > 0
        r--;
      }
    }
  }

  return res;
};
