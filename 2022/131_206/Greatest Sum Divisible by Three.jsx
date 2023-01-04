// Given an array nums of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three.

 

// Example 1:

// Input: nums = [3,6,5,1,8]
// Output: 18
// Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).
// Example 2:

// Input: nums = [4]
// Output: 0
// Explanation: Since 4 is not divisible by 3, do not pick any number.
// Example 3:

// Input: nums = [1,2,3,4,4]
// Output: 12
// Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).


// # @param {Integer[]} nums
// # @return {Integer}
// def max_sum_div_three(nums)
//     num = nums.sum()
//     arr = nums.sort()
//     mod_arr = arr.map {|ele| ele = ele % 3} 
//     pick = num % 3
//     i = 0
//     i1 = nil
//     i2 = nil
//     i3 = nil
//     if pick == 1
//         while i < mod_arr.length
//             if mod_arr[i] == 1 && !i3
//                 i3 = i
//             elsif mod_arr[i] == 2 && !i1
//                 i1 = i
//             elsif mod_arr[i] == 2 && !i2
//                 i2 = i
//             elsif i1 && i2 && i3
//                 break
//             end
//             i += 1
//         end
//     elsif pick == 2
//         while i < mod_arr.length
//             if mod_arr[i] == 2 && !i3
//                 i3 = i
//             elsif mod_arr[i] == 1 && !i1
//                 i1 = i
//             elsif mod_arr[i] == 1 && !i2
//                 i2 = i
//             elsif i1 && i2 && i3
//                 break
//             end
//             i += 1
//         end  
//     else
//         return num
//     end
//     p arr
//     p mod_arr
//     p [i1, i2, i3]
//     if !i3
//         if i1 && i2
//             return num - (arr[i1] + arr[i2])
//         else
//             return 0
//         end
//     elsif i3
//         if i1 && i2
//             if arr[i1] + arr[i2] > arr[i3]
//                 return num - arr[i3]
//             else
//                 return num - (arr[i1] + arr[i2])
//             end
//         else
//             return num - arr[i3]
//         end
//     end
// end