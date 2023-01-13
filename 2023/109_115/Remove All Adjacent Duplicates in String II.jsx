// You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

 

// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"



// # @param {String} s
// # @param {Integer} k
// # @return {String}
// def remove_duplicates(s, k)
//     stack = [[s[0], 1]]
//     for i in (1...s.length)
//         if !stack.empty? && stack[-1][0] == s[i]
//             stack.push([s[i], stack[-1][1]+1])
//             if stack[-1][1] == k
//                 k.times do 
//                    stack.pop 
//                 end
//             end
//         else
//             stack.push([s[i], 1])
//         end
//     end
//     result = []
//     stack.each do |ele|
//         result.push(ele[0]) 
//     end
//     return result.join("")
// end

// # def remove_duplicates(s, k)
// #     remove = true
// #     while remove
// #         remove = false
// #         i = k - 1
// #         while i < s.length
// #             subs = s.slice(i-k+1, k)
// #             if subs.split("").uniq.length == 1
// #                 if i == s.length - 1
// #                     s = s[0..i-k]
// #                 elsif i == k - 1
// #                     s = s[i+1..-1]
// #                 else
// #                     s = s[0..i-k]+s[i+1..-1]
// #                 end
// #                 remove = true
// #             else
// #                 i += 1
// #             end
// #         end
// #     end
// #     return s
// # end

// # def remove_duplicates(s, k)
// #     remove = true
// #     while remove
// #         remove = false
// #         i = 0
// #         head = nil
// #         tail = nil
// #         while i < s.length
// #             letter = s[i]  
// #             if !head
// #                 if i == s.length - 1
// #                     break
// #                 else
// #                     if letter == s[i+1] 
// #                         head = i
// #                     end
// #                 end
// #             else
// #                 if s[head] == letter
// #                     tail = i
// #                     if tail - head == k - 1
// #                         remove = true
// #                         if head == 0
// #                             s = s[tail+1..-1]
// #                         elsif tail == s.length - 1
// #                             s = s[0...head]
// #                         else
// #                             s = s[0...head]+s[tail+1..-1]
// #                         end
// #                         i = head
// #                         head = nil
// #                         tail = nil
// #                     end
// #                 else
// #                     head = nil
// #                     tail = nil
// #                     i -= 1
// #                 end
// #             end
// #             i += 1
// #         end
// #     end
// #     return s
// # end