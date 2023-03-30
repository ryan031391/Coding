// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104



// # @param {Integer[][]} intervals
// # @return {Integer[][]}
// def merge(intervals)
//     intervals = intervals.sort {|ele1, ele2| ele1[0]<=>ele2[0] } # sort : O(nlogn)
//     startNum = intervals[0][0]
//     endNum = intervals[0][1]
//     result = []
//     intervals.each do |curr| # for loop : O(n)
//         if endNum < curr[0]
//             result.push([startNum, endNum])
//             startNum = curr[0]
//             endNum = curr[1]
//         else
//             endNum = [endNum, curr[1]].max()
//         end
//     end
//     result.push([startNum, endNum])
//     return result
// end