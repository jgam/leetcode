def solution(arrangement):
    answer = 0
    opening = 0
    stickNum = 0
    prev = ''
    
    for i in arrangement:
        #if openend, then increment num of sticks
        if i == '(':
            stickNum += 1
            prev = '('
        else:
            #if closed continuously then add one only to the answer
            if prev == ')':
                stickNum -= 1
                answer += 1
            #closed then add current num of sticks
            else:
                answer += (stickNum - 1)
                stickNum -= 1
            prev = ')'
            
    return answer