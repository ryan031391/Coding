// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]




// # Definition for singly-linked list.
// # class ListNode
// #     attr_accessor :val, :next
// #     def initialize(val = 0, _next = nil)
// #         @val = val
// #         @next = _next
// #     end
// # end
// # @param {ListNode} l1
// # @param {ListNode} l2
// # @return {ListNode}
// def add_two_numbers(l1, l2)
//     cur1 = rev(l1)
//     cur2 = rev(l2)
//     head = ListNode.new()
//     cur = head
//     add = false
//     while cur1 != nil || cur2 != nil || add
//         num1 = cur1 ? cur1.val : 0 
//         num2 = cur2 ? cur2.val : 0 
//         cur.val = add ? num1 + num2 + 1 : num1 + num2
//         if cur.val > 9
//             cur.val -= 10
//             add = true
//         else
//             add = false
//         end
//         cur1 = cur1 ? cur1.next : nil
//         cur2 = cur2 ? cur2.next : nil
//         if cur1 || cur2 || add
//             cur.next = ListNode.new()
//             cur = cur.next
//         end
//     end
//     return rev(head)
// end

// def rev(head)
//     cur = head.next
//     prev = head
//     head.next = nil
//     while cur
//         temp = cur.next
//         cur.next = prev
//         prev = cur
//         cur = temp
//     end
//     return prev
// end




// # Definition for singly-linked list.
// # class ListNode
// #     attr_accessor :val, :next
// #     def initialize(val = 0, _next = nil)
// #         @val = val
// #         @next = _next
// #     end
// # end
// # @param {ListNode} l1
// # @param {ListNode} l2
// # @return {ListNode}
// def add_two_numbers(l1, l2)
//     num1 = []
//     num2 = []
//     cur = l1
//     while cur
//         num1.push(cur.val)
//         cur = cur.next
//     end
//     cur = l2
//     while cur
//         num2.push(cur.val)
//         cur = cur.next
//     end
//     num = (num1.join("").to_i + num2.join("").to_i).to_s.split("").map{|ele| ele.to_i}
//     head = ListNode.new(num[0])
//     if num.length > 1
//         i = 1
//         cur = head
//         while i < num.length
//             cur.next = ListNode.new(num[i])
//             cur = cur.next
//             i += 1
//         end
//     end
//     return head
// end

