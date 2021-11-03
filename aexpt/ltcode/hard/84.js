/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    //first loop
    let left= []
    let stack = []
    for(let index in heights){
        if(stack.length){
            // pop the stack
            while(heights[stack[stack.length-1]] >= heights[index]){
                stack.pop();
            }
            if(stack.length){
                left.push(stack[stack.length-1] + 1)    
            }else{
                left.push(0)
            }
            stack.push(parseInt(index))
            
        }else{
            stack.push(parseInt(index))
            left.push(parseInt(index))
        }
    }
    
    //second loop
    let right= [];
    stack = [];
    for(let index = heights.length-1; index > -1; index--){
        if(stack.length){
            // pop the stack
            while(heights[stack[stack.length-1]] >= heights[index]){
                stack.pop();
            }
            if(stack.length){
                right.unshift(stack[stack.length-1] - 1)    
            }else{
                right.unshift(heights.length-1)
            }
            stack.push(parseInt(index))
            
        }else{
            stack.push(parseInt(index))
            right.unshift(parseInt(index))
        }
    }
    
    // 3rd N
    let solution = -Infinity;
    for(let index in heights){
        solution = Math.max(solution, heights[index] * (Math.abs(left[index] - right[index]) + 1))
    }
    return solution
};
