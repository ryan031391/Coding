// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


// # @param {Integer[]} nums
// # @return {Integer}
// def max_product(nums)
//     arr = helper(nums, 0)
//     return [arr[0], arr[1][1], arr[1][0]].max
// end

// def helper(nums, i)
//     if i == nums.length - 1
//         return [nums[i], [nums[i], nums[i]]]
//     end
//     max = helper(nums, i+1)
//     use = max[0]
//     notuse = max[1][0]
//     itself = max[1][1]
//     num = nums[i]
//     use = [num*use, num].max
//     notuse = [notuse, num].max
//     return [use, [notuse, num]] #[1, -1]
// end