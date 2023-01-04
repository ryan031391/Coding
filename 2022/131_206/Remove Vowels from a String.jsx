// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

 

// Example 1:

// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"
// Example 2:

// Input: s = "aeiou"
// Output: ""


/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let result = ""
    for (let i = 0; i < s.length; i++) {
        if (!['a', 'e', 'i', 'o', 'u'].includes(s[i])) {
            result += s[i]
        }
    }
    return result
};