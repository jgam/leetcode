var ProductOfNumbers = function() {
    this.products = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num == 0) {
    this.products = [];
  } else {
    const N = this.products.length;
    this.products.push(N == 0 ? num : num * this.products[N - 1]);
  }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    const N = this.products.length;
  if (N - k < 0) return 0;
  if (N == k) return this.products[N - 1];
  return this.products[N - 1] / this.products[N - k - 1];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
