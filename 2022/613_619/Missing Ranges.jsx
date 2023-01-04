// You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

// Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: ["2","4->49","51->74","76->99"]
// Explanation: The ranges are:
// [2,2] --> "2"
// [4,49] --> "4->49"
// [51,74] --> "51->74"
// [76,99] --> "76->99"
// Example 2:

// Input: nums = [-1], lower = -1, upper = -1
// Output: []
// Explanation: There are no missing ranges since there are no missing numbers.


/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let missing = []
  
    for (let i = -1; i < nums.length; i++) {
        let lo = nums[i] === undefined ? lower - 1 : nums[i]
        let hi = nums[i + 1] === undefined ? upper + 1 : nums[i + 1]
        switch (hi - lo) {
            case 0:
                continue
            case 1:
                continue
            case 2:
                missing.push(`${lo + 1}`)
                break
            default:
                missing.push(`${lo + 1}->${hi - 1}`)
        }
    }
    
    return missing
};
