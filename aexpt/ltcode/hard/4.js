/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let firstIndex = 0;
    let secondIndex = 0;
    
    let newArr = []
    
    while(firstIndex < nums1.length || secondIndex < nums2.length){
        if(nums1.length > firstIndex && nums2.length > secondIndex){
            if(nums1[firstIndex] > nums2[secondIndex]){
                newArr.push(nums2[secondIndex])
                secondIndex += 1
            }else{
                newArr.push(nums1[firstIndex])
                firstIndex += 1
            }
        }else if(nums1.length > firstIndex){
            const tobeAdded = nums1.slice(firstIndex, nums1.length)
            newArr = [...newArr, ...tobeAdded]
            firstIndex =Infinity
        }else if(nums2.length > secondIndex){
            const tobeAdded = nums2.slice(secondIndex, nums2.length)
            newArr = [...newArr, ...tobeAdded]
            secondIndex = Infinity
        }else{
            break
        }
    }
    
    if(newArr.length % 2 === 0 ? true : false){
        let curIndex = newArr.length/2;
        return (newArr[curIndex-1] + newArr[curIndex])/2
    }else{
        let curIndex = parseInt(newArr.length / 2);
        return newArr[curIndex]
    }
};
