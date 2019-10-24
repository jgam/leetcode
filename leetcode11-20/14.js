/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort(function(a,b){
        return a.length - b.length;
    });

    console.log(strs);
};

longestCommonPrefix(['flower','flo','flour']);