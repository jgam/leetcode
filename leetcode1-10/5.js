function is_Palindrome(str1){
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}

var longestPalindrome = function(s) {
    var max_length = 0, maxp = '';


    for (var i =0; i < s.length; i++){
        var subs = s.substr(i, s.length);//substring from i to s.lenght
        for(var j = subs.length; j>=0; j--){
            var sub_subs_str = subs.substr(0, j);
            
            if(sub_subs_str.length <= 1) continue;

            if(is_Palindrome(sub_subs_str)){
                if(sub_subs_str.length > max_length){
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }
    console.log(maxp);
    return maxp;
};
longestPalindrome('abcbadea');