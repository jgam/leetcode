var uniqueLetterString = function(s) {
    let count = 0
    const hashmap = {}

    for (let i = 0; i < s.length; i++) {
        const singleChar = s[i]
        if (!hashmap[singleChar]) {
            hashmap[singleChar] = []
        }
        hashmap[singleChar].push(i)
    }
    
    console.log(hashmap)

    for (const singleChar in hashmap) {
        const occurrences = hashmap[singleChar]

        for (let i = 0; i < occurrences.length; i++) {
            const point = occurrences[i]
            const leftIndexBound = typeof occurrences[i-1] !== 'undefined'? occurrences[i-1] : -1
            const rightIndexBound = typeof occurrences[i+1] !=='undefined'? occurrences[i+1] : s.length

            const leftSum = getLeftRange(leftIndexBound, point);
            const rightSum = getRightRange(rightIndexBound, point)
            count += (leftSum * rightSum)
        }
    }

    return count
    
};

const getLeftRange = (left, point) => {
    left  = left + 1
    return point - left + 1
}
const getRightRange = (right, point) => {
    right = right - 1
    return  right - point + 1
}
