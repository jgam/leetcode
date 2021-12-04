/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(digits) {
    const n = digits.length;
  if (n === 0) return 0;
  
  const dp = new Array(n+1);
  
  dp[n] = 1;
  dp[n - 1] = digits[n-1] === '0' ? 0 : 1;
  
  for (let i = n - 2; i >= 0; i--) {
    if (digits[i] === '0') {
      dp[i] = 0;
    } else if (parseInt(digits.slice(i, i+2)) < 27) {
      dp[i] = dp[i+1] + dp[i+2];
    } else {
      dp[i] = dp[i+1];
    }
  }
  
  return dp[0];
    
};
