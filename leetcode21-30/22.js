var generateParenthesis = function(n) {
    //just like fibonacci
    //4 -> 5
    let current = 0;
    var result = []
    var array = []
    
    array = Array(n).fill('(') + Array(n).fill(')');
    
    
    console.log(array)
    ``
    for (let i = 0; i < array.length - 1; i++) {
  // This is where you'll capture that last value
        for (let j = i + 1; j < array.length; j++) {
            results.push(`${array[i]} ${array[j]}`);
        }
    }
    

};