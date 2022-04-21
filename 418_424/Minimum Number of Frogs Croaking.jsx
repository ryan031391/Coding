// You are given the string croakOfFrogs, which represents a combination of the string "croak" from different frogs, that is, multiple frogs can croak at the same time, so multiple "croak" are mixed.

// Return the minimum number of different frogs to finish all the croaks in the given string.

// A valid "croak" means a frog is printing five letters 'c', 'r', 'o', 'a', and 'k' sequentially. The frogs have to print all five letters to finish a croak. If the given string is not a combination of a valid "croak" return -1.

 

// Example 1:

// Input: croakOfFrogs = "croakcroak"
// Output: 1 
// Explanation: One frog yelling "croak" twice.
// Example 2:

// Input: croakOfFrogs = "crcoakroak"
// Output: 2 
// Explanation: The minimum number of frogs is two. 
// The first frog could yell "crcoakroak".
// The second frog could yell later "crcoakroak".
// Example 3:

// Input: croakOfFrogs = "croakcrook"
// Output: -1
// Explanation: The given string is an invalid combination of "croak" from different frogs.
 

// Constraints:

// 1 <= croakOfFrogs.length <= 105
// croakOfFrogs is either 'c', 'r', 'o', 'a', or 'k'.



// # @param {String} croak_of_frogs
// # @return {Integer}
// def min_number_of_frogs(croak_of_frogs)
//     count = 0
//     hash = Hash.new(0)
//     croak_of_frogs.each_char do |char|
//         if char == 'r'
//             if hash['c'] < 1
//                 return -1
//             end
//         elsif char == 'o'
//             if hash['c'] < 1 || hash['r'] < 1
//                 return -1
//             end
//         elsif char == 'a'
//             if hash['c'] < 1 || hash['r'] < 1 || hash['o'] < 1
//                 return -1
//             end
//         elsif char == 'k'
//             if hash['c'] < 1 || hash['r'] < 1 || hash['o'] < 1 || hash['a'] < 1
//                 return -1
//             else
//                 max = [hash['c'], hash['r'], hash['o'], hash['a']].max
//                 hash['c'] -= 1
//                 hash['r'] -= 1
//                 hash['o'] -= 1
//                 hash['a'] -= 1
//                 if max > count
//                     count = max
//                 end
//             end
//         end
//         if char != 'k'
//             hash[char] += 1
//         end
//     end
//     hash.each do |k, v|
//         if v != 0
//             return -1
//         end
//     end
//     return count
// end