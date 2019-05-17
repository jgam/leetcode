var findMedianSortedArrays = (a1, a2) => {
  let x = a1.concat(a2);
  x.sort(function (a,b) {
    return a - b;
  });
  let len = x.length;
  
  return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];

}