// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]


// # @param {Integer[]} nums
// # @param {Integer} target
// # @return {Integer[][]}
// def four_sum(nums, target)
//     return helper(nums, target, 0, 4)
// end

// def helper(nums, target, i, count)
//     if i == nums.length - 1 && count == 1 && target == nums[i]
//         return [[nums[i]]]
//     else
//         return false
//     end
//     if count == 1
//         if target != nums[i]
//             return helper(nums, target, i+1, count)
//         else
//             return [[nums[i]]]
//         end
//     end
//     skip = helper(nums, target, i+1, count)
//     take = helper(nums, target-nums[i], i+1, count-1)
//     take = take.map{|ele| ele.push(nums[i])}
//     if skip == false && take == false
//         return false
//     elsif take == false
//         return skip
//     elsif skip == false
//         return take
//     else
//         return skip.concat(take)
//     end
// end