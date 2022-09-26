// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]
 

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30



// # @param {Integer[]} candidates
// # @param {Integer} target
// # @return {Integer[][]}
// def combination_sum2(candidates, target)
//     if candidates.length < 1
//         return nil
//     end
//     num = candidates.first
//     if num > target
//         return combination_sum2(candidates[1..-1], target)
//     end
//     if num == target
//         use = [[]]
//     else
//         use = combination_sum2(candidates[1..-1], target-num)
//     end
//     not_use = combination_sum2(candidates[1..-1], target)
//     if use == nil
//         if not_use == nil
//             return nil
//         else
//             return not_use
//         end
//     else
//         use.each do |ele|
//             ele.push(num)
//         end
//         if not_use == nil
//             return use
//         else         
//             return use.concat(not_use)
//         end
//     end
// end