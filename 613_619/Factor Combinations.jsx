// Numbers can be regarded as the product of their factors.

// For example, 8 = 2 x 2 x 2 = 2 x 4.
// Given an integer n, return all possible combinations of its factors. You may return the answer in any order.

// Note that the factors should be in the range [2, n - 1].

 

// Example 1:

// Input: n = 1
// Output: []
// Example 2:

// Input: n = 12
// Output: [[2,6],[3,4],[2,2,3]]
// Example 3:

// Input: n = 37
// Output: []
 

// Constraints:

// 1 <= n <= 107



// # @param {Integer} n
// # @return {Integer[][]}
// def get_factors(n)
//     arr = []
//     num = n
//     var = prime(num) 
//     while var[-1] != 1
//         arr.push(var[1])
//         var = prime(var[0])
//     end
//     if var[0] != n
//         arr.push(var[0])
//     end
//     if arr.empty?
//         return []
//     end
//     hash = Hash.new(nil)
//     result = [arr]
//     arr = [arr]
//     while arr[0].length > 2
//         cur = []
//         arr.each do |subarr|
//             i = 0
//             while i < subarr.length
//                 j = i + 1
//                 while j < subarr.length
//                     temp = []
//                     temp_num = subarr[i] * subarr[j]
//                     for k in (0...subarr.length)
//                        if k != i && k != j
//                            if subarr[k] < temp_num
//                                temp.push(subarr[k])
//                            else
//                                temp.push(temp_num)
//                                temp.push(subarr[k])
//                                temp_num = subarr[-1] + 1
//                            end
//                        end
//                     end
//                     if temp.length != subarr.length - 1
//                         temp.push(temp_num)
//                     end
//                     str = temp.join(" ")
//                     if !hash[str]
//                         hash[str] = true
//                         cur.push(temp)
//                         result.push(temp)
//                     end
//                     k = j+1
//                     while k < subarr.length
//                         if subarr[k] != subarr[j]
//                             break
//                         end
//                         k += 1
//                     end
//                     j = k
//                 end
//                 k = i+1
//                 while k < subarr.length
//                     if subarr[k] != subarr[i]
//                         break
//                     end
//                     k += 1
//                 end
//                 i = k
//             end
//         end
//         arr = cur 
//     end
//     return result
// end

// def prime(num)
//     for i in (2..num/2)
//        if num % i == 0
//            return [num/i, i]
//        end
//     end
//     return [num, 1]
// end