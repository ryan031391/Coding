// In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].

// Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.

 

// Example 1:

// Input: barcodes = [1,1,1,2,2,2]
// Output: [2,1,2,1,2,1]
// Example 2:

// Input: barcodes = [1,1,1,1,2,2,3,3]
// Output: [1,3,1,3,1,2,1,2]
 

// Constraints:

// 1 <= barcodes.length <= 10000
// 1 <= barcodes[i] <= 10000


// # @param {Integer[]} barcodes
// # @return {Integer[]}
// def rearrange_barcodes(barcodes)
//     bar_hash = Hash.new(0)
//     barcodes.each {|bar| bar_hash[bar]+=1 }
//     key_order = bar_hash.keys.sort {|k1,k2| bar_hash[k2]<=>bar_hash[k1]}
//     items = key_order.map {|k| Array.new(bar_hash[k],k) }.flatten
//     p items
//     ret_array = []
//     len = barcodes.length
//     for i in 0...len / 2 + (len % 2)
//         ret_array[i*2]=items[i]
//     end
//     p ret_array
//     for i in 0...len / 2
//         ret_array[1+i*2]=items[i+ (len/2) + (len % 2)]
//     end
    
//     ret_array
// end