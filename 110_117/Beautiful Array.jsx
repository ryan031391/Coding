// An array nums of length n is beautiful if:

// nums is a permutation of the integers in the range [1, n].
// For every 0 <= i < j < n, there is no index k with i < k < j where 2 * nums[k] == nums[i] + nums[j].
// Given the integer n, return any beautiful array nums of length n. There will be at least one valid answer for the given n.

 

// Example 1:

// Input: n = 4
// Output: [2,1,4,3]
// Example 2:

// Input: n = 5
// Output: [3,1,2,5,4]

/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
    const EVEN = 1;
    const ODD = 2;
    let helper = (arr, flag) => {
        if (arr.length <= 2)
            return arr;
        let even, odd;
        if (flag == ODD)
            arr = arr.map(el=>(el+1)/2);
        else if (flag == EVEN)
            arr = arr.map(el=>el/2);
        even = helper(arr.filter(el=>el%2 === 0), EVEN);
        odd = helper(arr.filter(el=>el%2 !== 0), ODD);
        arr = even.concat(odd);
        if (flag == ODD)
            arr = arr.map(el=>el*2-1);
        else if (flag == EVEN)
            arr = arr.map(el=>el*2);
        return arr;
    };
    let arr = new Array(n);
    for (let i = 0; i<n; i++)
        arr[i] = i+1;
    return helper(arr);
};