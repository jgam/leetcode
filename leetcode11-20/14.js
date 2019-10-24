/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort(function(a,b){
        return a.length - b.length;
    });
    var current = strs[0];
    strs.shift();
    for(var i = current.length-1; i >= 0; i--){
        //for loop the smallest from end to start
        var new_str = current.slice(0, i)
        for(var j = 0; j < j.length; j++){
            console.log(strs[j],new_str);
            if(strs[j].indexOf(new_str) >= 0){
                continue;
            }
            else{
                break;
            }
            return new_str;
        }
    }

    return ''
};

console.log(longestCommonPrefix(['flower','flo','flour']));