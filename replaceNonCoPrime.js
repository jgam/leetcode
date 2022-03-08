var replaceNonCoprimes = function(nums) {
    let stack = [nums[0]];
    let solution = [];
    
    for(let i = 1; i < nums.length; i++){
        let curnum = nums[i];
        while(stack.length && gcd(stack[stack.length-1], curnum) > 1){
            //not co prime
            let prev = stack.pop();
            curnum = lcm(curnum, prev)
        }
        stack.push(curnum);
    }

    return stack
    
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }
};
