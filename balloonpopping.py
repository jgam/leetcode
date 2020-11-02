def solution(a):
    answer = 2
    start = 0
    end = len(a) - 1
    
    for i in range(1,len(a)):
        if a[start] > a[i]:
            answer += 1
            start = i
        
        if a[end] > a[len(a)-1-i]:
            answer += 1
            end = len(a) -1 -i
            
    if start == end:
        return answer -1
    return answer
