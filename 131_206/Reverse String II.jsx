// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = s.split("");
    const step = 2 * k;
    for (let i = 0; i < s.length; i += step) {
        result = reverse(result, i, k);
    }
    return result.join("");
};

function reverse(a, start, length) {
    let end = Math.min(a.length - 1, start + length - 1);
    while (start < end) {
        [a[start], a[end]] = [a[end], a[start]];
        start++;
        end--;
    }
    return a;
}