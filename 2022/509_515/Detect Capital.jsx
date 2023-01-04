// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return [
    word => word.every(char => char <= 'Z' && char >= 'A'),
    word => word.every(char => char <= 'z' && char >= 'a'),
    word => {
      for(let i = 0; i < word.length; i++) {
        if(i === 0 && (word[i] > 'Z' || word[i] < 'A')) {
          return false;
        }
        if(i !== 0 && (word[i] > 'z' || word[i] < 'a')) {
          return false
        }
      }
      return true;
    }
  ].map(fn => fn(word.split(''))).some(result => result === true);
};