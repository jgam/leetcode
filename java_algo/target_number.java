class Solution {
    static int ret = 0;
    public int solution(int[] numbers, int target) {
        dfs(numbers, target, 0);
        return ret;
    }
    
    public void dfs(int [] numbers, int target, int pointer){
        if(pointer == numbers.length){
            int current_sum = 0;
            for(int j=0; j<numbers.length; j++){
                current_sum += numbers[j];
            }
            
            if(current_sum == target){
                ret ++;
            }
            return;
        }
        else{
            numbers[pointer]*=1;
            dfs(numbers,target,pointer+1);
            
            numbers[pointer]*=-1;
            dfs(numbers,target,pointer+1);
        }
    }
}
