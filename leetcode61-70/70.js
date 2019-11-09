/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const arr = [0, 1];
  for (let i = 2; i < n + 2; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  const finalIdx = arr.length - 1;
  return arr[finalIdx];
};

console.log(climbStairs(45)); //output 3

//1111, 112, 121, 211, 22

//11111, 1112, 1121, 1211, 2111, 122, 212, 221
