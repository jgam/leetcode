var longestPalindrome = function(s) {
    var max_length = 0, maxp = '';


    for (var i =0; i < s.length; i++){
        var subs = s.substr(i, s.length);
        console.log(subs)
        console.log(typeof(subs))
    }
};
longestPalindrome('abcbadea');