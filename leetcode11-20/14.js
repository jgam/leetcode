/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0){
        return '';
    }
    
<<<<<<< HEAD
};
=======
    if(strs.length === 1){
        return strs[0];
    }
    
    strs.sort(function(a,b){
        return a.length - b.length;
    });
    var current = strs[0];
    strs.shift();
    for(var i = current.length; i >= 0; i--){
        //for loop the smallest from end to start
        var new_str = current.slice(0, i)
        for(var j = 0; j < strs.length; j++){
            //console.log(strs[j],new_str);

            // this part is the longest substring
            if(strs[j].indexOf(new_str) >= 0){
                if(j === strs.length -1){
                    return new_str
                }
                continue;
            }
            else{
                break;
            }
        }
    }

    return ''
};

console.log(longestCommonPrefix(['flower','flo','flour']));
>>>>>>> 40b93bd8d5023095c7ef669b9df174f6e441b056
