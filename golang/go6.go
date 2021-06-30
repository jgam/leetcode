import (
    "fmt"
    "math"
)

func isPowerOfFour(n int) bool {
    if n == 0{
        return false
    }
    var k float64 = float64(n)
    var converted float64 = math.Sqrt(math.Sqrt(k))
    
    if converted == float64(int64(converted)) {
        return true
    }
    return false
}
