// You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

// One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

// Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

// Note: You cannot rotate an envelope.

 

// Example 1:

// Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
// Output: 3
// Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
// Example 2:

// Input: envelopes = [[1,1],[1,1],[1,1]]
// Output: 1



// # @param {Integer[][]} envelopes
// # @return {Integer}
// def max_envelopes(envelopes)
//     # arr = envelopes.sort()
//     # p arr
//     # i = 1
//     # count = 1
//     # prev = arr[0]
//     # while i < arr.length
//     #     cur = arr[i]
//     #     if cur[0] > prev[0] && cur[1] > prev[1]
//     #         count += 1
//     #         prev = cur
//     #     end
//     #     i += 1
//     # end
//     # return count
//     envelopes = envelopes.sort()
//     return rec(envelopes, 0, 0, 0, 0)
// end

// def rec(envelopes, i, length, width, count)
//     if i == envelopes.length
//         return count 
//     end
//     cur = envelopes[i]
//     notuse = rec(envelopes, i+1, length, width, count)
//     use = 0
//     if cur[0] > length && cur[1] > width
//         use = rec(envelopes, i+1, cur[0], cur[1], count+1)
//     end
//     return [use, notuse].max()
// end