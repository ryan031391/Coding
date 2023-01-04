// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var string = s.split('');
    var re = /[aeiouAEIOU]/g;
    var array = [];
    while ((match = re.exec(s)) != null) {
        array.push(match.index);
    }
    
    for (var i = 0; i < array.length/2; i++) {
        var temp = string[array[i]];
        string[array[i]] = string[array[array.length - 1 - i]];
        string[array[array.length - 1 - i]] = temp;
    }
    return string.join('');
};