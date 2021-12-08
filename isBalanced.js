function isBalanced(s) {
    // Write your code here
    console.log(s)
    
    let ins = ['(', '[', '{']
    let outIn = {
        ']':'[',
        '}':'{',
        ')':'('
    }
    let localIns = [];
    
    for(let i = 0; i < s.length; i++){
        if(ins.includes(s[i])){
            localIns.push(s[i]);
        }else{
            if(localIns.length === 0){
                return 'NO'
            }
            let currentOut = localIns.pop();
            if(currentOut !== outIn[s[i]]){
                return 'NO'
            }
        }
    }
    if(localIns.length){
        return 'NO'
    }
    return 'YES'
}
