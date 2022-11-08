// A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

// Suppose we need to investigate a mutation from a gene string start to a gene string end where one mutation is defined as one single character changed in the gene string.

// For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
// There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

// Given the two gene strings start and end and the gene bank bank, return the minimum number of mutations needed to mutate from start to end. If there is no such a mutation, return -1.

// Note that the starting point is assumed to be valid, so it might not be included in the bank.

 

// Example 1:

// Input: start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
// Output: 1
// Example 2:

// Input: start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
// Output: 2
// Example 3:

// Input: start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
// Output: 3
 

// Constraints:

// start.length == 8
// end.length == 8
// 0 <= bank.length <= 10
// bank[i].length == 8
// start, end, and bank[i] consist of only the characters ['A', 'C', 'G', 'T'].




// def min_mutation(start, end_gene, bank)
//     return -1 if bank.empty?
    
//     @dict = Hash.new {|h, k| h[k] = []}
//     q, visited = [[start, 0]], []

//     bank.each { |gene| transform(gene) }
    
//     l = while !q.empty?
//         gene, level = q.shift
//         next if visited.include?(gene)
//         return level if gene == end_gene
       
//         visited << gene
//         steps = transform(gene)
        
//         neighbours = steps.map {|step| @dict[step] }.compact.flatten
//         neighbours.each { |n| q << [n, level + 1] }
//     end
    
//     l ? l : -1
// end

// def transform(gene)
//     res, i = [], 0
    
//     while i < gene.size
//         new_gene = gene.dup
//         new_gene[i] = "*"
//         @dict[new_gene] << gene
//         res << new_gene
//         i += 1
//     end
    
//     res
// end
