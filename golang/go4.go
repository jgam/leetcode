import (
    "fmt"
)

func majorityElement(nums []int) int {
    m := make(map[int]int)
    
    for i:=0; i < len(nums); i++ {
        
        if v, exists := m[nums[i]]; exists{
            m[nums[i]] = v + 1
        }else{
            m[nums[i]] = 1
        }
    }
    
    curMajor := len(nums) / 2 + 1

    for key, element := range m{
        if element >= curMajor{
            return key
        }
    }
    return 0
}
