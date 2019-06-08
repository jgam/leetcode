var romanToInt = function(s) {
    
    let symbol_to_val = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let total = 0;
    let current = 0;
    
    for(let i = 0; i < s.length; i++){
        
        if(s[i] > current){
            //
        }
        
        current += symbol_to_val[s[i]];
        
        console.log(s[i])
        console.log(symbol_to_val[s[i]])
    }
    
};
