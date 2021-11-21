/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let firstPointer = 0;
    let secondPointer = 0;
    let remainings = nums1.length - m;
    
    while(m > 0 && n >0){
        if(nums1[firstPointer] > nums2[secondPointer]){
            n -= 1;
            nums1.splice(firstPointer, 0, nums2[secondPointer])
            firstPointer += 1
            secondPointer += 1
        }else{
            m -= 1
            firstPointer += 1
        }
    }  
    
    while(n > 0){
        n -= 1;
        nums1.splice(firstPointer, 0, nums2[secondPointer])
        firstPointer += 1;
        secondPointer += 1;
    }
    
    while(remainings > 0){
        remainings -= 1;
        nums1.pop();
    }
    
    return nums1
};
