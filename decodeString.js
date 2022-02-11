const decodeString = (s) => {
    const stack = new Array();
    
    for(let i = 0; i < s.length; i++) { 
        const char = s.charAt(i);
        if(isClose(char)) {
            let decoded = getInner(stack);
            let counter = getCounter(stack);
            let repeated = decoded.repeat(counter);
            
            stack.push(repeated);

        } else stack.push(char);
    }
    
    let ans = '';
    while(stack.length) ans = `${stack.pop()}${ans}`;
    
    return ans;
};

const getCounter = (stack) => {
    let ans = '';
    while( isNum(stack[stack.length - 1]) ) ans = `${stack.pop()}${ans}`;
    return parseInt(ans);
};

const getInner = (stack) => {
    let ans = '';
    while(!isOpen(stack[stack.length - 1] )) {
        ans = `${stack.pop()}${ans}`;
    }
    stack.pop(); // leftover
    return ans;
}

const isNum = char => char >= '0' && char <= '9';
const isOpen = char => char ==='[';
const isClose = char => char === ']';
