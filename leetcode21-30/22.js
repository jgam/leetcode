var generateParenthesis = function(n) {
    //just like fibonacci
    //4 -> 5
    let current = 0;
    var result = []
    var array = []
    
    array = Array(n).fill('(') + Array(n).fill(')');
    
    
    console.log(array)
    
    

};

console.log(generateParenthesis(3));