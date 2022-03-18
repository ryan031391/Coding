// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104
 

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?



// # @param {Integer[]} nums
// # @return {Integer}
// def length_of_lis(nums)
//     return 0 if nums==[]
//     num_array = []
//     nums.each do |num|
//         num_array_adds = []
//         num_array.each do |numb| 
//             if num>numb[-1]
//                 numb<<num
//             elsif num>numb[0]
//                 num_array_adds<<((numb.map {|val| val<num ? val : nil}).compact<<num) 
//             end
//         end
//         num_array<<[num]
//         num_array.concat(num_array_adds)
//     end
//     (num_array.map {|arr| arr.length}).max
// end