// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104



// # @param {Integer[]} nums
// # @return {Integer[]}
// def find_error_nums(nums)
//     hash = Array.new(nums.length,0)
//     nums.each do |num|
//         hash[num-1] += 1
//     end
//     for i in 0...nums.length
//         lost = i+1 if hash[i]==0
//         found = i+1 if hash[i]==2
//     end
//     return [found,lost]
// end
