/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [-1];
    let solution = 0;
    let cur = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            stack.push(i)
        }else{
            stack.pop();
            if(stack.length){
                cur = i - stack[stack.length-1]
                solution = Math.max(solution, cur)
            }else{
                stack.push(i)
            }
        }
    }
    return solution
};
