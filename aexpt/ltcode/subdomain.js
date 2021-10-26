/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let curObj = {}
    
    for(let eachDomain of cpdomains){
        const currentArr = eachDomain.split(" ")
        const currentDomains = currentArr[1].split(".")
        let curDomain = ""
        for(let eachDomIndex = currentDomains.length-1; eachDomIndex > -1; eachDomIndex--){
            curDomain = currentDomains[eachDomIndex] + curDomain
            if(curDomain in curObj){
                curObj[curDomain] += parseInt(currentArr[0])
            }else{
                curObj[curDomain] = parseInt(currentArr[0])
            }
            curDomain = '.' + curDomain
        }
    }
    
    let solution = []
    for(let curKey of Object.keys(curObj)){
        solution.push(String(curObj[curKey]) + ' ' + curKey)
    }
    return solution
};
