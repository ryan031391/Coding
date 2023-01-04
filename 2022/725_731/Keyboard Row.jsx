// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

 

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]
 

// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase). 



// # @param {String[]} words
// # @return {String[]}
// def find_words(words)
//   first_row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
//   second_row = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
//   third_row = ["z", "x", "c", "v", "b", "n", "m"]
  
//   output = []
//   words.each do |word|
//     chars = word.downcase.chars
//     set = Set.new(chars)
    
//     match = false
//     [first_row, second_row, third_row].each do |row|
//       if (row & chars).length == set.length
//         match = true
//         break
//       end
//     end
//     output.push(word) if match
//   end
//   output
// end
