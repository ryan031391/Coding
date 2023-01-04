// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.

// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: s = "daabcbaabcbc", part = "abc"
// Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".
// Example 2:

// Input: s = "axxxxyyyyb", part = "xy"
// Output: "ab"
// Explanation: The following operations are done:
// - s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
// - s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
// - s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
// - s = "axyb", remove "xy" starting at index 1 so s = "ab".
// Now s has no occurrences of "xy".



// # @param {String} s
// # @param {String} part
// # @return {String}
// def remove_occurrences(s, part)
//     i = part.length - 1
//     while i < s.length
//         temp = s[i+1-part.length..i]
//         if temp == part
//             if i == part.length - 1
//                 return remove_occurrences(s[i+1..-1], part)
//             elsif i == s.length - 1
//                 return remove_occurrences(s[0..i-part.length], part)
//             else
//                 return remove_occurrences(s[0..i-part.length]+s[i+1..-1], part)
//             end
//         end
//         i += 1
//     end
//     return s
// end