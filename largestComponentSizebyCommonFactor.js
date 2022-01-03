var largestComponentSize = function(A) {
    const p = []
    for(let num of A) {
        const set = getFactors(num)  // get the set of all the factors
        for(let factor of set.values()) {  
            p[find(factor)] = find(num) // union the number with all the factors
        }
    }
    console.log(p)
    
    const cntMap = new Map()
    for(let num of A) {   // for all the input numbers, count the related numbers via their parents 
        const parent = find(num)
        console.log('parent ', parent)
        cntMap.set(parent, (cntMap.get(parent) || 0) + 1) 
    }
    return Math.max(...cntMap.values())
    
    function find(a) {
        if(!p[a]) p[a] = a
        while(p[a] !== a) {
            //path compression
            p[a] = p[p[a]]
            a = p[a]
        }
        return a
    }
    
    function getFactors(number) {
        const res = new Set()  // use set to guarantee no duplicates, no need to add number itself here. 
        for (let i = 2; i * i <= number; i++) { 
            if (number % i === 0) {
                res.add(i)
                res.add(number / i)
            }
        }
        return res
    }
    
    
    
};
