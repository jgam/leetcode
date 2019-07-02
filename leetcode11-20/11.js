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
    /*
    function comparing(current_area, start, end, height){
        let max_area2 = current_area;
        let start2 = start;
        let end2 = end;
        let height2 = height;
        let current_area2;

        while(start2 ===0 && end2===height2.length-1){
            current_area2 = Math.min(heihgt2[start2], height2[end2]) * (end2-start2);
            
            //comparing current and max area
            if(current_area > max_area){
                max_area2 = current_area;
            }

            //now adding 1 to start or end
            if(start2===0){
                end2 += 1;
            }
            else if(end2===height2.length-1){
                start2 -= 1;
            }
            else if(height2[start]>height2[end]){
                end2 += 1;
            }
            else if(height2[start]<height2[end]){
                start2 -= 1;
            }
            else{
                //so here is when start and end are the same...in here we should 
                // we have to go two ways to make sure check everything
                start2 -= 1;
                continue;


                //return Math.min(start_subtracting, end_addition);
            }
        }
        return max_area2;

    }
    */

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
        else{
            //so here is when start and end are the same...in here we should 
            // we have to go two ways to make sure check everything
            let start_subtracting = comparing(current_area, start-1, end, height);
            let end_addition = comparing(current_area, start, end+1, height);


            return Math.min(start_subtracting, end_addition);
        }


    }
    return max_area;


};

console.log(maxArea([1,2,3,4,5,6,7,8,9]))