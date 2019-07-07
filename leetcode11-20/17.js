/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let bruh = {"1": [''], "2":["a","b","c"], "3":["d","e","f"], "4":["g","h","i"], "5":["j","k","l"], "6":["m","n","o"], "7":["p","q","r","s"], "8":["t","u","v"], "9":["w","x","y","z"], "0":[" "]};
    let ret = [];

    function allPossibleCases(arr) {
        
        if (arr.length == 1) {
          return arr[0];
        } 
        else {
          var result = [];
          var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
          for (var i = 0; i < allCasesOfRest.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
              result.push(arr[0][j] + allCasesOfRest[i]);
            }
          }
          return result;
        }
      
    }

    for(let i = 0; i< digits.length; i++){
        ret.push(bruh[digits[i]]);
    }

    return allPossibleCases(ret);

};

letterCombinations('234');