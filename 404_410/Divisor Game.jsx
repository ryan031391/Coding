// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

// Choosing any x with 0 < x < n and n % x == 0.
// Replacing the number n on the chalkboard with n - x.
// Also, if a player cannot make a move, they lose the game.

// Return true if and only if Alice wins the game, assuming both players play optimally.

 

// Example 1:

// Input: n = 2
// Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.
// Example 2:

// Input: n = 3
// Output: false
// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
 

// Constraints:

// 1 <= n <= 1000



// # @param {Integer} n
// # @return {Boolean}
// def divisor_game(n)
//     dp = Array.new(n + 1, false)
//     dp[0] = false
//     dp[1] = false
    
//     for i in (2..n)
//         current_N = i
        
        
//         for x in (1...current_N)
//             if current_N % x == 0
//                 if dp[current_N - x] == false
//                     dp[current_N] = true
//                     break
//                 end
//             end
//         end
//     end
    
//     return dp[n]
// end
