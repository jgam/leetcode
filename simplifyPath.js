var simplifyPath = function(path) {
    let stack = [];
    
    let arr = path.split("/").filter(elem => elem !== '' && elem!=='.');
    for(let elem of arr){
        if(elem === '..'){
            if(stack.length >0){
                stack.pop();
            }
        }else{
            stack.push(elem);
        }
    }
    
    return constructPath(stack)
    
    function constructPath(path){
        let ret = '';
        
        if(path.length ===0){
            return '/'
        }
        
        for(let i = 0; i < path.length; i++){
            ret += '/' + path[i]
        }
        
        return ret;
    }
};
