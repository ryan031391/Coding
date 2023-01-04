// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

 

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5
 

// Constraints:

// 2 <= n <= 5000
// nums.length == 2 * n
// 0 <= nums[i] <= 104
// nums contains n + 1 unique elements and one of them is repeated exactly n times.



// # @param {Integer[]} nums
// # @return {Integer}
// def repeated_n_times(nums)
//     hash = Hash.new(0)
//     n = nums.length / 2
//     for i in (0...nums.length)
//         hash[nums[i]] += 1 
//     end
//     hash.each do |k, v|
//        if v == n
//            return k
//        end
//     end
// end


// # @param {Integer[]} nums
// # @return {Integer}
// def repeated_n_times(nums)
//     hash = Hash.new(0)
//     n = nums.length / 2
//     for i in (0...nums.length)
//         hash[nums[i]] += 1 
//         if hash[nums[i]] == n
//             return nums[i]
//         end
//     end
// end