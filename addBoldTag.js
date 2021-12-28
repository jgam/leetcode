/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function(s, words) {
    let marked = new Array(s.length).fill(false);
    
    for (let word of words) {
        let start = s.indexOf(word);
        while (start > -1) {
            let end = start+word.length;
            for (let i=start;i<end;i++) {
                marked[i] = true;
            }
            start = s.indexOf(word, start + 1);
        }
    }
    let res = "";
    for (let i = 0;i<s.length;i++) {
        if (marked[i] && ( (i==0)|| !marked[i-1])) {
            res += "<b>";
        }
        res += s[i];
        if (marked[i] && (i === s.length-1  || !marked[i+1])) {
            res += "</b>";
        }
    }    
    return res;
};
