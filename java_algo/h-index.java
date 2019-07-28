import java.util.Arrays;
import java.util.List;
import java.util.ListIterator;

class Solution {
    public static int getMax(int[] numbers){
        int maxValue = numbers[0];
        for(int i=1;i < numbers.length;i++){
             if(numbers[i] > maxValue){
	             maxValue = numbers[i];
	        }
         }
        return maxValue;
    }
    
    public int solution(int[] citations) {
        int max_num = getMax(citations);
        for(int i = max_num; i > 0; i--){
            int ret_num = 0;
            for(int j = 0; j < citations.length; j++){
                if(citations[j] >= i){
                    ret_num += 1;
                }
                
                if(ret_num == i){
                    if((citations.length - ret_num) < i){
                        return ret_num;
                    }
                }
            }
        }
        return 0;
    }
    
    
}

//[3,0,6,1,5,1,1,1,1] => 1
