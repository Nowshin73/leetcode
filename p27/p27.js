var removeElement = function (nums, val) {
    let n = nums.length;

    let i = 0;
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];  // swap with last
            n--;                    // reduce array size
        } else {
            i++;
        }
    }

    return n;   // number of elements not equal to val
};
let nums = [3,2,2,3];
let val = 3;
console.log(removeElement(nums,val));
