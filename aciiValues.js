/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    const arr = Array.from({length:n}, ()=>'a');
    let val = k-n;
    for(let j=n-1; j>=0; --j) {
        if(val>=26) {
            arr[j] = 'z';
            val-=25;
        } else {
            arr[j] = String.fromCharCode(97+val);
            break;
        }
    }
    return arr.join('');
};
