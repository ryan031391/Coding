// An integer x is numerically balanced if for every digit d in the number x, there are exactly d occurrences of that digit in x.

// Given an integer n, return the smallest numerically balanced number strictly greater than n.

 

// Example 1:

// Input: n = 1
// Output: 22
// Explanation: 
// 22 is numerically balanced since:
// - The digit 2 occurs 2 times. 
// It is also the smallest numerically balanced number strictly greater than 1.
// Example 2:

// Input: n = 1000
// Output: 1333
// Explanation: 
// 1333 is numerically balanced since:
// - The digit 1 occurs 1 time.
// - The digit 3 occurs 3 times. 
// It is also the smallest numerically balanced number strictly greater than 1000.
// Note that 1022 cannot be the answer because 0 appeared more than 0 times.
// Example 3:

// Input: n = 3000
// Output: 3133
// Explanation: 
// 3133 is numerically balanced since:
// - The digit 1 occurs 1 time.
// - The digit 3 occurs 3 times.
// It is also the smallest numerically balanced number strictly greater than 3000.
 

// Constraints:

// 0 <= n <= 106



/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
    for(let i=n+1; i<=1224444;i++){
        if(isNumericallyBalanced(i)){
            return i;
        }
    }
    function isNumericallyBalanced(n){
        let map={},d,nStr=n.toString();
        while(n>0){
            d = n%10;
            if(d>nStr.length){
                return false;
            }
            if(map[d]===undefined){
                map[d]=1;
            }else{
                map[d]++;
                if(map[d]>d){
                    return false;
                }
            }
            n = Math.floor(n/10);
        }
        for(let key in map){
            if(map[key]!==parseInt(key)){
                return false;
            }
        }
        return true;
    }
};