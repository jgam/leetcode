/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left = 0;
  var right = nums.length - 1;
  var mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid - 1] > nums[mid]) return nums[mid];
    if (nums[mid] < nums[left] || nums[mid] < nums[right]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
    
    
};
