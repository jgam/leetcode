def solution(n):
    #4 => (2,2) (1,1,1,1) (1,1,2) (2,1,1) (1,2,1)
    
    if n <= 2:
        return n
    
    #3 => (2,1) (1,2) (1,1,1)
    answer = 0
    current = [1,2]
    for i in range(2, n):
        current.append((current[-1] + current[-2])%1000000007)
    return current[-1]
