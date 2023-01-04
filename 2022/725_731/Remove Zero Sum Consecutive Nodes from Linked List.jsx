// // Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

// // After doing so, return the head of the final linked list.  You may return any such answer.

 

// // (Note that in the examples below, all sequences are serializations of ListNode objects.)

// // Example 1:

// // Input: head = [1,2,-3,3,1]
// // Output: [3,1]
// // Note: The answer [1,2,1] would also be accepted.
// // Example 2:

// // Input: head = [1,2,3,-3,4]
// // Output: [1,2,4]
// // Example 3:

// // Input: head = [1,2,3,-3,-2]
// // Output: [1]


// # Definition for singly-linked list.
// # class ListNode
// #     attr_accessor :val, :next
// #     def initialize(val = 0, _next = nil)
// #         @val = val
// #         @next = _next
// #     end
// # end
// # @param {ListNode} head
// # @return {ListNode}

// def remove_zero_sum_sublists(head)
//     n = 0
//     curr = head
//     arr1 = Array.new
    
//     loop do
//         arr1[n] = curr.val
//         n += 1
//         curr = curr.next
//         break if curr == nil
//     end
    
//     loop do
//         j = arr1.length - 1
//         ok = 0
//         while j >= 0 and ok == 0
//             i = 0
//             while i <= j and ok == 0
//                 if arr1[i, j - i + 1].sum == 0
//                     ok = 1
//                     (i..j).each do
//                         arr1.delete_at(i)
//                     end
//                 end
//                 i += 1
//             end
//             j -= 1
//         end
        
//         break if ok == 0
//     end
    
//     head = ListNode.new(arr1[0])
//     prev = head
//     i = 1
//     while i < arr1.length
//         curr = ListNode.new(arr1[i])
//         prev.next = curr
//         prev = curr
//         i += 1
//     end
//     return head
// end


// # def remove_zero_sum_sublists(head)
// #     h = head
// #     arr = []
// #     while h
// #         arr.push(h.val)
// #         h = h.next
// #     end
// #     if arr == [0,0]
// #         return ListNode.new(nil)
// #     end
// #     prefix = [0]
// #     for i in (0...arr.length)
// #         prefix.push(prefix[-1]+arr[i]) 
// #     end
// #     hash = Hash.new(nil)
// #     arr1 = Array.new(arr.length, true)
// #     # p prefix
// #     for i in (0...prefix.length)
// #         if !hash[prefix[i]]
// #             hash[prefix[i]] = i
// #         else
// #             if arr1[hash[prefix[i]]] ==  arr1[i-1]
// #                 arr1[hash[prefix[i]]..i-1] = Array.new(i-hash[prefix[i]], false)
// #                 hash[prefix[i]] = nil
// #             else
// #                 hash[prefix[i]] = i
// #             end
// #         end
// #     end
// #     # p arr1
// #     head = nil
// #     for i in (0...arr.length)
// #         if arr1[i]
// #             if !head
// #                 head = ListNode.new(arr[i])
// #                 cur = head
// #             else
// #                 cur.next = ListNode.new(arr[i])
// #                 cur = cur.next
                
// #             end
// #         end
// #     end
// #     return head
// # end