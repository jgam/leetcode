import (
    "fmt"
)

func isPowerOfFour(n int) bool {
    if n == 0{
        return false
    }
    
    if n == 1{
        return true
    }
    
    var current int = 1
    for i := 1; i < n; i++{
        current *= 4
        if current > n {
            return false
        } else if current == n{
            return true
        }
    }
    return false
}
