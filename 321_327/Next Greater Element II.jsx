// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]
 

// Constraints:

// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109


// # @param {Integer[]} nums
// # @return {Integer[]}
// def next_greater_elements(nums)
//     result = []
//     next_i = 0
//     i = 0
//     hash = Hash.new(nil)
//     circle = false
//     while result.length != nums.length
//         if (!circle && i < next_i) || circle
//             result.push(nums[next_i])
//         else
//             num = nums[i]
//             not_found = false
//             while nums[next_i] <= num
//                 next_i += 1
//                 if next_i == nums.length
//                     next_i = -1
//                     circle = true
//                 elsif next_i == i
//                     not_found = true
//                     circle = false
//                     break
//                 end
//             end
//             if not_found
//                 result.push(-1)
//             else
//                 result.push(nums[next_i])
//             end
//         end
//         i += 1
//     end
//     return result
// end