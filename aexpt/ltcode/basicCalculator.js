/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    console.log(s)
    // stack, current, solution
    let solution = 0;
    let current = "";
    let stack = []
    let sign = 1
    
    // for loop to solve it
    for(let eachChar of s){
        if(eachChar === " "){
            continue
        }else if(isDigit(eachChar)){
            // add the numbers
            current += eachChar;
        }else if(eachChar === "+" || eachChar === "-"){
            // plus the number
            solution += (current ? parseInt(current) : 0) * sign
            // update the current
            current = ""
            // update sign
            sign = eachChar === "+" ? 1 : -1
        }else if(eachChar === "("){
            stack.push(solution)
            stack.push(sign)
            solution = 0
            sign=1
        }else if(eachChar === ")"){
            solution += parseInt(current) * sign
            solution = stack.pop() * solution + stack.pop()
            current = "0"
            
        }else{
            // the input character must be an alphabet or other special characters not specified
            return null
        }
    }
    
    function isDigit(input){
        return parseInt(input) >= 0 && parseInt(input) < 10
    }
    
    
    console.log(solution, current, sign)
    return solution + (parseInt(current) * sign)
};
