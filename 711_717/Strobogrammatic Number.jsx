// Given a string num which represents an integer, return true if num is a strobogrammatic number.

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

 

// Example 1:

// Input: num = "69"
// Output: true
// Example 2:

// Input: num = "88"
// Output: true
// Example 3:

// Input: num = "962"
// Output: false


/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const validStrobs = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 };
    
    let left = 0;
    let right = num.length - 1;
    
    while (left <= right) {
        const front = num.charAt(left++);
        const back = num.charAt(right--);
        
        if (validStrobs[back] == null || validStrobs[back] != front) return false;
    }
    
    return true;
};