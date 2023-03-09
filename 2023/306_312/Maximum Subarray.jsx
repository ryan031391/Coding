// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104



// # @param {Integer[]} nums
// # @return {Integer}
// def max_sub_array(nums)
// #     nums = [-2,1,-3,4,-1,2,1,-5,4]
// #     prefix = [-2,-1,-4,0,-1,1,2,-3,1]
    
// #     prefix[2] = nums[0] + nums[1] + nums[2]
// #     prefix[0] = nums[0]
// #     prefix[2] - prefix[0] = nums[1] + nums[2]
//     prefix = [0]
//     for i in (0...nums.length)
//         prefix.push(nums[i]+prefix[-1]) 
//     end
//     max = prefix[1]
//     p prefix
//     for i in (0...prefix.length-1)
//         for j in (i+1...prefix.length)
//             temp = prefix[j] - prefix[i]
//             if temp > max 
//                 max = temp
//             end
//         end
//     end
//     return max
// end