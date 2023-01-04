// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

 

// Example 1:


// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.
// Example 2:


// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let num = 0
    nums.slice(0, k+1).forEach(ele => {
        if (ele === 1) {
            num += 1
        }
    })
    if (num > 1) {
        return false
    }
    for (let i = k+1; i < nums.length; i++) {
        if (nums[i-k-1] === 1) {
            num -= 1
        }
        if (nums[i] === 1) {
            num += 1
        }
        if (num > 1) {
            return false
        }
    }
    return true
};