// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109



// # @param {Integer[]} nums
// # @return {Integer}
// def longest_consecutive(nums)
//     if nums.length == 0
//         return 0
//     end
//     maxNum = nums.max()
//     minNum = nums.min() 
//     buckets = Array.new(maxNum-minNum+2, 0) 
//     if minNum < 0
//         fixNum = minNum.abs() + 1
//     else
//         fixNum = 0
//     end
//     nums.each{|ele| buckets[ele+fixNum] = 1}
//     result = 0
//     prev = false
//     potentialMax = 0
//     buckets.each do |ele|
//         if prev && ele == 1
//             potentialMax += 1
//         elsif !prev && ele == 1
//             potentialMax = 1
//         end
//         if ele == 0
//             prev = false
//             if potentialMax > result
//                 result = potentialMax
//             end
//         else
//             prev = true
//         end
//     end
//     if potentialMax > result
//         result = potentialMax
//     end
//     return result
// end