import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Hashtable<Integer, Integer> new_dict = new Hashtable<Integer, Integer>();

        for(int i = 0; i < nums.length; i++){
            new_dict.put(nums[i], i);
        }

        for(int i = 0; i < nums.length; i++){
            int end = target - nums[i];
            if(new_dict.containsKey(end)){
                if(new_dict.get(end) != i){
                    return new int[] {i, new_dict.get(end)};
                }
            }

        }
        return null;
    }
}
