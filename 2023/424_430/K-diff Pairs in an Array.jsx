// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

// 0 <= i, j < nums.length
// i != j
// nums[i] - nums[j] == k
// Notice that |val| denotes the absolute value of val.

 

// Example 1:

// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
// Example 3:

// Input: nums = [1,3,1,5,4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).



// # @param {Integer[]} nums
// # @param {Integer} k
// # @return {Integer}
// def find_pairs(nums, k)
//     if nums.length < 2
//         return 0
//     end
//     arr = nums.sort
//     result = []
//     # diffs = []
//     # i = 1
//     # for i in (1...arr.length)
//     #     diffs.push(arr[i] - arr[i-1])
//     # end
//     i = 0
//     j = 1
//     # prefix = []
//     # diff = 0
//     while i < arr.length
//         if i < j
//             diff = arr[j] - arr[i]
//             if diff < k
//                 j += 1
//                 if j == arr.length
//                     break
//                 end
//             elsif diff == k
//                 result.push([arr[i], arr[j]])
//                 i += 1
//             else
//                 i += 1 
//             end
//         else
//             j += 1
//             if j == arr.length
//                 break
//             end
//         end
//     end
//     # while i < diffs.length
//     #     if !prefix.empty?
//     #         prefix.each do |ele|
//     #             diff += diffs[ele]
//     #         end
//     #         diff += diffs[i] 
//     #     else
//     #         diff = diffs[i]
//     #     end
//     #     if diff == k
//     #         result += 1
//     #         prefix = []
//     #     elsif diff < k
//     #         prefix.push(i)
//     #     else
//     #         j = 0
//     #         while j < prefix.length
//     #             ele = diffs[prefix[j]]
//     #             diff -= ele
//     #             if diff == k
//     #                 result += 1
//     #                 prefix = []
//     #                 break
//     #             elsif diff < k
//     #                 if j == prefix.length - 1
//     #                     prefix = []
//     #                 else
//     #                     prefix = prefix[j+1..-1]
//     #                 end
//     #                 break
//     #             end
//     #             j += 1
//     #         end
//     #     end
//     #     i += 1
//     #     diff = 0
//     # end
//     return result.uniq.length
// end