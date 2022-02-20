var countPairs = function(nums, k) {
    let divisors = getDivisor(k);
    let counters = new Array(k+1).fill(0);
    let result = 0;
    
    console.log(divisors);
    console.log(counters)

    for(const num of nums){
        let val = Math.floor(k / gcd(k, num));
        result += counters[val];

        for(const divisor of divisors){
            if(num % divisor === 0){
                counters[divisor]++;
            }
        }
    }

    return result;

};


function gcd(a,b){
    if(b === 0) return a;
    if(a < b) {
        return gcd(b,a);
    } else {
        return gcd(b, a%b)
    }
}

function getDivisor(k){
    let arr = new Array();

    for(let i = 1; i <= k; i++){
        if(k % i === 0){
            arr.push(i);
        }
    }
    return arr;
}
