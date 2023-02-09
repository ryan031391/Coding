// You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.

// The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.

// Return the maximum score of a pair of sightseeing spots.

 

// Example 1:

// Input: values = [8,1,5,2,6]
// Output: 11
// Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
// Example 2:

// Input: values = [1,2]
// Output: 2
 

// Constraints:

// 2 <= values.length <= 5 * 104
// 1 <= values[i] <= 1000


// # @param {Integer[]} values
// # @return {Integer}
// def max_score_sightseeing_pair(values)
//     # arr_h = []
//     # arr_t = []
//     # values.each_with_index do |ele, i|
//     #     arr_h.push(ele+i)
//     #     arr_t.push(ele-i)
//     # end
//     # max = arr_h[0] + arr_t[1]
//     # for i in (0...values.length-1)
//     #     num1 = arr_h[i]
//     #     for j in (i+1...values.length)
//     #         temp = num1 + arr_t[j]
//     #         if temp > max
//     #             max =temp
//     #         end
//     #     end
//     # end
//     # return max
//     # p arr_h
//     # p arr_t
//     # i = values.length - 1
//     # arr_h_t = []
//     # arr_t_t = []    
//     # while i >= 0
//     #     arr_h_t.push(arr_h[i])
//     #     arr_t_t.push(arr_t[i])
//     #     i -= 1
//     # end
//     # return [find_max(arr_h, arr_t), find_max(arr_t_t, arr_h_t)].max()
//     a = values
//     m = 0
//     total = -Float::INFINITY
    
//     for i in 1...a.length
//         total = [total, a[m] + m + a[i] - i].max
//         if i + a[i] > m + a[m]
//             m = i
//         end
        
//     end
//     return total
// end

// # def find_max(arr_h, arr_t)
// #     max_h = arr_h[0]
// #     max_t = arr_t[1]
// #     ih = 0
// #     it = 1
// #     i = 1
// #     for i in (1...arr_t.length)
// #         num = arr_t[i]
// #         if num >= max_t
// #             max_t = num
// #             it = i
// #             j = ih
// #             while j < it
// #                 temp = arr_h[j]
// #                 if temp >= max_h
// #                     max_h = temp
// #                 end
// #                 j += 1
// #             end
// #             ih = j
// #         end
// #     end 
// #     return max_h + max_t
// # end


// # @param {Integer[]} values
// # @return {Integer}
// def max_score_sightseeing_pair(values)
//     arr_h = []
//     arr_t = []
//     values.each_with_index do |ele, i|
//         arr_h.push(ele+i)
//         arr_t.push(ele-i)
//     end
//     i = 1
//     max_h = arr_h[0]
//     max = arr_h[0] + arr_t[1]
//     while i < values.length
//         if arr_h[i-1] > max_h
//             max_h = arr_h[i-1]
//         end
//         sum = arr_t[i] + max_h
//         if sum > max
//             max = sum
//         end
//         i += 1
//     end
//     return max
// end
