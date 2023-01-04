// Given an integer n, return any array containing n unique integers such that they add up to 0.

 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let result = [];
    for (let i = 0; i < parseInt(n/2); i++) {
        let num = i + 1
        result.push(parseInt(num))
        result.push(parseInt(-num))
    }
    if (n % 2 == 0){
        return result
    } else {
        result.push(0)
        return result
    }
};