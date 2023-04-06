function insert_interval(intervals, newInterval) {
    let head = newInterval[0]
    let tail = newInterval[1]
    let i = 0
    let merge = false
    while (i < intervals.length) {
        let eleHead = intervals[i][0]
        let eleTail = intervals[i][1]
        if (eleTail >= head ) {
            if (eleHead <= tail) {
                newInterval = [
                    Math.min(eleHead, head), Math.max(eleTail, tail)
                    ]
                head = newInterval[0]
                tail = newInterval[1]
                intervals.splice(i, 1)
            } else {
                intervals.splice(i, 0, newInterval)
                return intervals
            } 
        } else {
            i += 1
        }
    }
    intervals.push(newInterval)
    return intervals
}