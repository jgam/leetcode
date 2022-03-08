var minMovesToMakePalindrome = function(s) {
    let arr = [];
    for(let i = 0; i < s.length; i++){
        arr.push(s[i]);
    }
    
    let arrLength = arr.length;
    
    let solution = 0;
    
    while(arrLength > 0){
        let lastChar = arr.pop();
        let lastCharIdx = arrLength-1;
        
        let firstIdx = arr.indexOf(lastChar);
        
        if(firstIdx === -1){
            solution += parseInt(lastCharIdx/2);
        }else{
            solution += firstIdx;
            arr.splice(firstIdx, 1);
            arrLength -= 1;
        }
        arrLength -= 1;
    }
    return solution
};
