// You are playing a Flip Game with your friend.

// You are given a string currentState that contains only '+' and '-'. You and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move, and therefore the other person will be the winner.

// Return all possible states of the string currentState after one valid move. You may return the answer in any order. If there is no valid move, return an empty list [].

 

// Example 1:

// Input: currentState = "++++"
// Output: ["--++","+--+","++--"]
// Example 2:

// Input: currentState = "+"
// Output: []



// # @param {String} current_state
// # @return {String[]}
// def generate_possible_next_moves(current_state)
//     length = current_state.length
//     index = 0
//     strings = []
//     while index < length do
//         char = current_state[index]
//         char2 = current_state[index + 1]

//            if char == char2 && char == "+"
//                final_string = current_state[index+2..length] ? current_state[index+2..length] : ""
//                front = current_state[0...index] ? current_state[0...index] : ""
//                strings << front + "--" + final_string
//            end

//         index += 1
//     end
//     return strings
// end