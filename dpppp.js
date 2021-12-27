/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, sw) {
    let dp = new Array(books.length);
    let width,mx;
    for(let i=0;i<books.length;i++){        
        
        dp[i]=(dp[i-1]||0)+books[i][1];
        width=books[i][0];
        mx=books[i][1];
        
        for(let j=i-1;width<=sw&&j>=0;j--){
            if(width+books[j][0]<=sw){
                mx=Math.max(mx,books[j][1]);
                width+=books[j][0];
                dp[i]=Math.min(dp[i],(dp[j-1]||0)+mx);
            }          
            else break;
        }                
    }
    return dp.pop();
};
