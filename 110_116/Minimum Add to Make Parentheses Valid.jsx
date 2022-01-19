// A parentheses string is valid if and only if:

// It is the empty string,
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

// For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.

 

// Example 1:

// Input: s = "())"
// Output: 1
// Example 2:

// Input: s = "((("
// Output: 3

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let hash = { '(':1, ')':-1 }
    let bool = 0
    let result = 0
    s.split("").forEach (ele => {
        bool += hash[ele]
        if (bool < 0) {
            result += 1
            bool = 0
        }
    })
    return result + bool
};