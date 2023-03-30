// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701
 

// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].



// # @param {String} column_title
// # @return {Integer}
// def title_to_number(column_title)
//     hash = Hash.new(0)
//     arr = ('A'..'Z').to_a
//     arr.each_with_index do |char, i|
//         hash[char] = i + 1 
//     end
//     l = column_title.length
//     result = 0
//     column_title.each_char.with_index do |char, i|
//          result += (26**(l-i-1))*hash[char]
//     end
//     return result
// end