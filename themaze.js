/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(m, s, d) {
    if(s[0] === d[0] && s[1] === d[1]) return true
  
  const dir = [[-1,0], [1,0], [0,-1], [0,1]]  
  for(let [y,x] of dir){
    let [r,c]  = s
    while(r >= 0 && r < m.length && c >= 0 && c < m[r].length && m[r][c] !== 1){
      r+=y
      c+=x
    }
    // go back one
    r-=y
    c-=x
    
    if(m[r][c] !== 0) continue
    m[r][c] = 2
    
    if(hasPath(m, [r,c], d)) return true
  }
  return false
};
