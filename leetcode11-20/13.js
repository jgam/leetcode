var romanToInt = function(str) {
    
    var result = 0;
    // the result is now a number, not a string
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    for (var i = 0;i<=decimal.length;i++) {
        while (str.indexOf(roman[i]) === 0){
        //checking for the first characters in the string
        result += decimal[i];
        //adding the decimal value to our result counter
        str = str.replace(roman[i],'');
        //remove the matched Roman letter from the beginning
        }
    }
    return result;
};

console.log(romanToInt('IIV'));