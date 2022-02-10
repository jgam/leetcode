/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let mlength = mountainArr.length();
    
    function findPeak(start,end){
        if(end < start){
            console.log('here', start,end)
            return -1
        }else if(end === start){
            let middleNum = mountainArr.get(end);
            let leftNum = mountainArr.get(end-1);
            let rightNum = mountainArr.get(end+1);
            
            if(leftNum < middleNum && middleNum > rightNum){
                return middle
            }else{
                return -1
            }
        }
        
        let middle = parseInt((end-start)/2) + start;
        
        let middleNum = mountainArr.get(middle);
        let leftNum = mountainArr.get(middle-1);
        let rightNum = mountainArr.get(middle+1);
        
        if(leftNum < middleNum && middleNum > rightNum){
            return middle
        }else if(leftNum < middleNum && middleNum < rightNum){
            return findPeak(middle, end)
        }else if(leftNum > middleNum){
            return findPeak(start, middle);
        }
    }
    
    function findIdx(start,end){
        if(start > end){
            return -1
        }else if(start === end){
            if(mountainArr.get(start) === target){
                return start
            }else{
                return -1
            }
        }
        
        let mid = parseInt((end-start) / 2)+start;
        
        let midNum = mountainArr.get(mid) 
        if(midNum === target){
            return mid
        }else if(midNum < target){
            return findIdx(mid+1, end)
        }else if(midNum > target){
            return findIdx(start,mid-1)
        }
    }
    
    function secondFindIdx(start,end){
        if(start > end){
            return -1
        }else if(start === end){
            if(mountainArr.get(start) === target){
                return start
            }else{
                return -1
            }
        }
        
        let mid = parseInt((end-start) / 2)+start;
        
        let midNum = mountainArr.get(mid) 
        console.log('midnum', midNum, target)
        if(midNum === target){
            return mid
        }else if(midNum < target){// 7 6 4 3 2 1, 2
            return findIdx(start, mid-1)
        }else if(midNum > target){
            return findIdx(mid+1,end)
        }
    }
    
    let maxHeightIdx = findPeak(0, mlength-1)
    
    if(mountainArr.get(maxHeightIdx) === target){
        return maxHeightIdx
    }
    
    let firstHalf = findIdx(0, maxHeightIdx);
    if(firstHalf !== -1) return firstHalf
    
    let secondHalf = secondFindIdx(maxHeightIdx, mlength);
    
    if(secondHalf!==-1) return secondHalf;
    
    return -1
};
