// You are given a 0-indexed array of distinct integers nums.

// There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.

// A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.

// Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let min = 0
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (num > nums[max]) {
            max = i
        } else if (num < nums[min]) {
            min = i
        }
    }
    let left = Math.max(min, max) + 1
    let right = nums.length - Math.min(min, max)
    let mid = Math.min(min, max) + 1 + nums.length - Math.max(min, max)
    return Math.min(left, right, mid)
};