// On a social network consisting of m users and some friendships between users, two users can communicate with each other if they know a common language.

// You are given an integer n, an array languages, and an array friendships where:

// There are n languages numbered 1 through n,
// languages[i] is the set of languages the i​​​​​​th​​​​ user knows, and
// friendships[i] = [u​​​​​​i​​​, v​​​​​​i] denotes a friendship between the users u​​​​​​​​​​​i​​​​​ and vi.
// You can choose one language and teach it to some users so that all friends can communicate with each other. Return the minimum number of users you need to teach.

// Note that friendships are not transitive, meaning if x is a friend of y and y is a friend of z, this doesn't guarantee that x is a friend of z.
 

// Example 1:

// Input: n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]
// Output: 1
// Explanation: You can either teach user 1 the second language or user 2 the first language.
// Example 2:

// Input: n = 3, languages = [[2],[1,3],[1,2],[3]], friendships = [[1,4],[1,2],[3,4],[2,3]]
// Output: 2
// Explanation: Teach the third language to users 1 and 3, yielding two users to teach.


/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    // user count
    const len = languages.length
    function Node(val) {
        
    }
    Node.table = new Array(1 + len)
    
    
    const lang2people = new Array(1 + n)
    for (let lang = 1; lang <= n; lang++)
        lang2people[lang] = []
    for (let val = 1; val <= len; val++) {
        const node = Node.table[val] = new Node(val)
        const langs = languages[val - 1]
        node.languages = new Set(langs)
        
        for (const lang of langs.values())
            lang2people[lang].push(val)
    }

    
    const commonTable = new Array(1 + len)
    for (let val = 1; val <= len; val++)
        commonTable[val] = []
    for (const [lang, people] of lang2people.entries()) {
        if (!people)    continue
        people.sort((a, b) => a - b)
        for (let i = 0; i < people.length - 1; i++) {
            const fromVal = people[i]
            for (let j = 1 + i; j < people.length; j++) {
                const toVal = people[j]
                if (fromVal < toVal)
                    commonTable[fromVal][toVal] = true
                else
                    commonTable[toVal][fromVal] = true
            }
        }
    }

    
    const edges = []
    for (let edge of friendships.values()) {
        let [fromVal, toVal] = edge
        if (fromVal > toVal) {
            [fromVal, toVal] = [toVal, fromVal]
        }
        
        if (commonTable[fromVal] && commonTable[fromVal][toVal]) {
            
        } else {
            edges.push(edge)
        }
    }
    
    
    let result = len
    for (let lang = 1; lang <= n; lang++) {
        let teachUs = new Set()
        for (const edge of edges.values()) {
            const [fromVal, toVal] = edge
            const fromNode = Node.table[fromVal], toNode = Node.table[toVal]
            if (!fromNode.languages.has(lang))    teachUs.add(fromVal)
            if (!toNode.languages.has(lang))  teachUs.add(toVal)
        }
        
        let outcome = teachUs.size
        result = Math.min(result, outcome)
    }
    
    
    return result
};