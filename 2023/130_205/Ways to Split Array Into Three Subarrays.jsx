// A split of an integer array is good if:

// The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
// The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements in mid is less than or equal to the sum of the elements in right.
// Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo 109 + 7.

 

// Example 1:

// Input: nums = [1,1,1]
// Output: 1
// Explanation: The only good way to split nums is [1] [1] [1].
// Example 2:

// Input: nums = [1,2,2,2,5,0]
// Output: 3
// Explanation: There are three good ways of splitting nums:
// [1] [2] [2,2,5,0]
// [1] [2,2] [2,5,0]
// [1,2] [2,2] [5,0]
// Example 3:

// Input: nums = [3,2,1]
// Output: 0
// Explanation: There is no good way to split nums.
 

// Constraints:

// 3 <= nums.length <= 105
// 0 <= nums[i] <= 104



// # @param {Integer[]} nums
// # @return {Integer}
// def ways_to_split(nums)
//     total = nums.sum()
//     target = total/3
//     first_sum = nums[0]
//     i = 0
//     result = 0
//     while first_sum <= target
//         rest = nums[i+1..-1]
//         rest_sum = rest.sum()
//         rest_target = rest_sum/2
//         second_sum = rest[0]
//         k = 0
//         while second_sum <= rest_target
//             if second_sum >= first_sum
//                 result += 1
//             end
//             k += 1
//             second_sum += rest[k]
//         end
//         i += 1
//         first_sum += nums[i]
//     end
//     return result%(10**9+7)
// end


// # @param {Integer[]} nums
// # @return {Integer}
// def ways_to_split(nums)
//     pre = []
//     sum = 0
//     nums.each{|ele| sum+=ele; pre.push(sum)}
//     result = 0
//     for i in (0...nums.length)
//         left_sum = pre[i]
//         l = i+1
//         r = nums.length - 2
//         l_bound = false
//         r_bound = false
//         while l <= r
//             mid = (l+r)/2 
//             mid_sum = pre[mid] - left_sum
//             if left_sum <= mid_sum
//                 l_bound = mid
//                 r = mid-1
//             else
//                 l = mid+1
//             end
//         end
//         l = i+1
//         r = nums.length - 2
//         while l <= r
//             mid = (l+r)/2
//             mid_sum = pre[mid] - left_sum
//             rigth_sum = pre[-1] - mid_sum - left_sum
//             if mid_sum <= rigth_sum
//                 r_bound = mid 
//                 l = mid+1
//             else
//                 r = mid-1
//             end
//         end
//         if !l_bound || !r_bound || l_bound > r_bound
//             next
//         else
//             result += (r_bound - l_bound +1)
//         end
//     end
//     return result%(10**9+7)
// end