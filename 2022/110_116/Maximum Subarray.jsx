// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let i = 0
    let max = 0
    let sum = 0
    while (i < nums.length) {
        let num = nums[i]
        sum += num
        if (sum < 0) {
            sum = 0
        } 
        if (max < sum) {
            max = sum
        }
        i += 1
    }
    if (max === 0) {
        max = nums[0]
        nums.forEach(ele => {
            if (ele > max) {
                max = ele
            }
        })
    }
    return max
};