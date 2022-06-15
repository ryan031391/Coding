// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 


// # @param {Integer} n
// # @return {String[]}
// def fizz_buzz(n)
//     (1..n).to_a.map do |num|
//         if is_fizz(num) && is_buzz(num)
//             "FizzBuzz"
//         elsif is_fizz(num)
//             "Fizz"
//         elsif is_buzz(num)
//             "Buzz"
//         else
//             "#{num}"
//         end
//     end
// end

// def is_fizz(num)
//     num % 3 == 0
// end

// def is_buzz(num)
//     num % 5 == 0
// end