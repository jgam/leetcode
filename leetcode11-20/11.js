/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

*/
var maxArea = function(height) {
    var start = 0;
    var end = height.length-1;
    let max_area = 0;
    while(start != end ){
        max_area = Math.max(max_area, Math.min(height[start], height[end]) * (end-start));

        if(height[start]> height[end]){
            end -= 1;
        }
        else{
            start += 1;
        }
    }
    return max_area;


};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))