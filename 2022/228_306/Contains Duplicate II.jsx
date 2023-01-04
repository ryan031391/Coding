// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false



// # @param {Integer[]} nums
// # @param {Integer} k
// # @return {Boolean}
// def contains_nearby_duplicate(nums, k)
//     num_hash = Hash.new
//     for i in 0...nums.length
//         if num_hash[nums[i]]==nil
//             num_hash[nums[i]]=i
//         else
//             return true if i-num_hash[nums[i]]<=k
//             num_hash[nums[i]]=i
//         end
//     end
//     false
// end
