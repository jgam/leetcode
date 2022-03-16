var validateStackSequences = function(pushed, popped) {
    let j = 0;
    let stack = [];
    for(let x of pushed){
        stack.push(x);
        while(stack.length && j < popped.length && stack[stack.length-1] === popped[j]){
            stack.pop();
            j+=1;
        }
    }
    
    return j=== popped.length
};
