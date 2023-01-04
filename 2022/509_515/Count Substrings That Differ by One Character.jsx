// Given two strings s and t, find the number of ways you can choose a non-empty substring of s and replace a single character by a different character such that the resulting substring is a substring of t. In other words, find the number of substrings in s that differ from some substring in t by exactly one character.

// For example, the underlined substrings in "computer" and "computation" only differ by the 'e'/'a', so this is a valid way.

// Return the number of substrings that satisfy the condition above.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: s = "aba", t = "baba"
// Output: 6
// Explanation: The following are the pairs of substrings from s and t that differ by exactly 1 character:
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// The underlined portions are the substrings that are chosen from s and t.
// ​​Example 2:
// Input: s = "ab", t = "bb"
// Output: 3
// Explanation: The following are the pairs of substrings from s and t that differ by 1 character:
// ("ab", "bb")
// ("ab", "bb")
// ("ab", "bb")
// ​​​​The underlined portions are the substrings that are chosen from s and t.


/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    let count = 0
    let min = Math.min(s.length,t.length)
    for(let i=1;i<=min;i++){
        for(let k=0;k<s.length-i+1;k++){
            let ssub = s.substring(k,k+i)
            for(let j=0;j<t.length-i+1;j++){
                let tsub = t.substring(j,j+i)
                if(ssub!=tsub){
                    if(ssub.length==1){
                        count++
                        continue
                    }

                    let match = 0
                    for(let m=0;m<ssub.length;m++){
                        if(ssub[m]==tsub[m])
                            match++
                
                    }
                    if(match==ssub.length-1)
                        count++
                }
            }
        }
        
         
        
    }
        
    return count
    
};