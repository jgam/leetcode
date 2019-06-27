/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var myStack = [];
    let open = '([{';
    let close = {']':'[', '}':'{', ')':'('};

    for(let i = 0; i<s.length; i++){
        if(open.includes(s[i])){
            myStack.push(s[i]);
        }
        else{
            if(myStack[myStack.length-1] === close[s[i]]){
                myStack.pop();
            }
            else{
                return false;
            }
        }
    }
    if(myStack.length === 0){
        return true;
    }
    else{
        return false;
    }
};

/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

console.log(isValid('()[]{}'));