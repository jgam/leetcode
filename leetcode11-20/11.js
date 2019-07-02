/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

*/
var maxArea = function(height) {
    //height is the list
    //we need to start from the middle.
    //decide which direction to move (right or left) based on comparing the number(small number direction)
    //now what if the two containers have same height

    //micro level architecting
    //first start with defining start and end index
    var middle = parseInt(height.length/2);
    var start = middle-1;
    var end = middle;
    let max_area = 0;
    let current_area = 0;

    //start the for loop and keep expanding the array

    while(start===0 && end ===height.length-1){
        
        current_area = Math.min(heihgt[start], height[end]) * (end-start);
        
        //comparing current and max area
        if(current_area > max_area){
            max_area = current_area;
        }

        //now adding 1 to start or end
        if(start===0){
            end += 1;
        }
        else if(end===height.length-1){
            start -= 1;
        }
        else if(height[start]>height[end]){
            end += 1;
        }
        else if(height[start]<height[end]){
            start -= 1;
        }


    }


};

maxArea([1,2,3,4,5,6,7,8,9])