// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


// def find_fre(num, k)
// 	hash = Hash.new(0)
// 	num.each{|ele| hash[ele] += 1}
// 	buckets = Array.new(n, Array.new())
// 	hash.each do |k, v|
// 		buckets[v].push(k)
// 	end
// 	i = buckets.length
// 	result = []
// 	while i >= 0
// 		bucket = buckets[i]
// 		if !bucket.empty?
// 			bucket.each do |ele|
// 				if result.length < k
// 					result.push(ele)
// 				end
// 			end
// 		end
// 		i -= 1
// 	end
// 	return result
// end
