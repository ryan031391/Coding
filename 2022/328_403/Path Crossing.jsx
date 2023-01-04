// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

 

// Example 1:


// Input: path = "NES"
// Output: false 
// Explanation: Notice that the path doesn't cross any point more than once.
// Example 2:


// Input: path = "NESWW"
// Output: true
// Explanation: Notice that the path visits the origin twice.
 

// Constraints:

// 1 <= path.length <= 104
// path[i] is either 'N', 'S', 'E', or 'W'.



// # @param {String} path
// # @return {Boolean}
// def is_path_crossing(path)
//     pos = [[0,0]]
//     path.split("").each do |dir|
//         if dir == "N"
//             pos.append([pos.last[0],pos.last[1] + 1])
//         elsif dir == "E"
//             pos.append([pos.last[0] + 1,pos.last[1]])
//         elsif dir == "S"
//             pos.append([pos.last[0],pos.last[1] - 1])
//         elsif dir == "W"
//             pos.append([pos.last[0] - 1,pos.last[1]])
//         end
//         if pos.uniq().length() != pos.length()
//             return true
//         end
//     end
//     return false
// end
