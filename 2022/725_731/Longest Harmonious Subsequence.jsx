// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 2
// Example 3:

// Input: nums = [1,1,1,1]
// Output: 0



// # @param {Integer[]} nums
// # @return {Integer}
// def find_lhs(nums)
//     return 0 if nums.empty?
//     longest = 0
//     nums
//         .group_by(&:itself)
//         .sort_by(&:first)
//         .each_cons(2) do |former, latter|
//             longest = [longest, former[-1].size + latter[-1].size].max if (former[0] - latter[0]).abs == 1 
//         end
//     longest
// end