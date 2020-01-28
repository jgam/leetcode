def solution(heights):
    answer = []
    #queue first in first out
    #stack list in first out
    for i in range(len(heights)):
        if i == 0:
            answer.append(i)
        for j in range(i-1,-1,-1):
            if heights[j] > heights[i]:
                answer.append(j+1)
                break
            if j == 0:
                answer.append(0)
        
    return answer