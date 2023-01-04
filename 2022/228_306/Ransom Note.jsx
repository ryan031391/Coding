// Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// # @param {String} ransom_note
// # @param {String} magazine
// # @return {Boolean}
// def can_construct(ransom_note, magazine)
//     note_hash = Hash.new(0)
//     magazine_hash =Hash.new(0)
    
//     ransom_note.each_char do |char|
//         note_hash[char] +=1
//     end
//     magazine.each_char do |char|
//        magazine_hash[char] +=1
//     end
//     note_hash.keys.each do |key|
//         return false if note_hash[key]>magazine_hash[key]
//     end
//     true
// end