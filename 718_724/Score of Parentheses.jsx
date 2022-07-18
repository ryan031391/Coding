// Given a balanced parentheses string s, return the score of the string.

// The score of a balanced parentheses string is based on the following rule:

// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.
 

// Example 1:

// Input: s = "()"
// Output: 1
// Example 2:

// Input: s = "(())"
// Output: 2
// Example 3:

// Input: s = "()()"
// Output: 2
 

// Constraints:

// 2 <= s.length <= 50
// s consists of only '(' and ')'.
// s is a balanced parentheses string.


// def score_of_parentheses(s)
//     return 0 if s.size < 2

//     stack = []
    
//     s.each_char do |ch|
//         if ch == '('
//             stack << ch
//         else
//             top = stack.pop
            
//             if top == '('
//                 stack << 1
//             else
//                sum = top
//                until stack.last == '('
//                    sum += stack.pop
//                end
//                 stack.pop
//                 stack << sum * 2
//             end
//         end
//     end
//     stack.reduce(:+)
// end
