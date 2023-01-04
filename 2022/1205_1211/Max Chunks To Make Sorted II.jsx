// You are given an integer array arr.

// We split arr into some number of chunks(i.e., partitions), and individually sort each chunk.After concatenating them, the result should equal the sorted array.

// Return the largest number of chunks we can make to sort the array.



//     Example 1:

// Input: arr = [5, 4, 3, 2, 1]
// Output: 1
// Explanation:
// Splitting into two or more chunks will not return the required result.
// For example, splitting into[5, 4], [3, 2, 1] will result in [4, 5, 1, 2, 3], which isn't sorted.
// Example 2:

// Input: arr = [2, 1, 3, 4, 4]
// Output: 4
// Explanation:
// We can split into two chunks, such as [2, 1], [3, 4, 4].
//     However, splitting into[2, 1], [3], [4], [4] is the highest number of chunks possible.


//         Constraints:

// 1 <= arr.length <= 2000
// 0 <= arr[i] <= 108


// # @param { Integer[] } arr
// # @return { Integer }
// def max_chunks_to_sorted(arr)
// sorted_arr = []
// arr.each_with_index{| ele, i | sorted_arr.push([ele, i]) }
// sorted_arr = sorted_arr.sort{| ele1, ele2 | ele1[0] <=> ele2[0] }
// i = arr.length - 1
// j = arr.length - 1
// max = sorted_arr[i][0]
// min = max
// pre_min = min
// result = 0
// while i >= 0
//         if arr[i] < min
//             min = arr[i]
// end
// if arr[i] == max
//             if pre_min >= max
//                 result += 1
// end
// pre_min = min
// while j >= 0
//                 if sorted_arr[j][1] < i
//                     max = sorted_arr[j][0]
// break
// end
// j -= 1
// end
// end
// i -= 1
// end
// return result
// end