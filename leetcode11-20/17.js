/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length == 0) return [];
    let table = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let stack = [];
    let res = [""];
    digits = digits.split("");
    console.log('original digits', digits)
    for (i = 0; i < digits.length; i++) digits[i] = parseInt(digits[i], 10);
    console.log('preprocessed digits', digits)    
    for (num of digits) stack.push(table[num].split(""));
    console.log('stack', stack)
    //until this part is data preprocessing
    console.log('res is ',res);

    //by stack.shift() we are moving array to left each time
    while (stack.length > 0) {
        let len = res.length;
        for (i = 0; i < len; i++) {
            for (ltr of stack[0]) {
                res.push(res[i] + ltr);
            }
            console.log('res is ', res)
        }
        stack.shift();
    }

    //it only filters the return array of length only 3
    res = res.filter((el) => {
        return el.length == digits.length
    })
    
    return res;
};

console.log(letterCombinations('234'));