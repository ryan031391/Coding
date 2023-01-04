// There is an integer array perm that is a permutation of the first n positive integers, where n is always odd.

// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = perm[i] XOR perm[i + 1]. For example, if perm = [1,3,2], then encoded = [2,1].

// Given the encoded array, return the original array perm. It is guaranteed that the answer exists and is unique.

 

// Example 1:

// Input: encoded = [3,1]
// Output: [1,2,3]
// Explanation: If perm = [1,2,3], then encoded = [1 XOR 2,2 XOR 3] = [3,1]
// Example 2:

// Input: encoded = [6,5,4,6]
// Output: [2,4,1,5,3]


// # @param {Integer[]} encoded
// # @return {Integer[]}
// def decode(encoded)
//     n = 2
//     num = 1
//     while n <= encoded.length + 1
//         num ^= n
//         n += 1
//     end
//     i = 1
//     while i < encoded.length
//         num ^= encoded[i]
//         i += 2
//     end
//     i = 0
//     result = [num]
//     while result.length <= encoded.length
//         result.push(result[i] ^ encoded[i])
//         i += 1
//     end
//     return result
// end

