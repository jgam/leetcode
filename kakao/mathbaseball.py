from itertools import permutations

def solution(baseball):
    answer = 0
    #now possible set created!
    possibleSet = set(["".join(i) for i in set(permutations(["1","2","3","4","5","6","7","8","9"], 3))])
    
    for possibleSolution in possibleSet:
        for solution in baseball:
            #now compart the answer
            solution[0] = str(solution[0])
            strike = 0
            ball = 0
            for i in range(3):
                if solution[0][i] == possibleSolution[i]:
                    strike += 1
                elif possibleSolution[i] in solution[0]:
                    ball += 1
            if ball == solution[2] and strike == solution[1]:
                print('here twice')
                continue
            else:
                break
                
            if solution[0] == str(baseball[-1][0]):
                answer += 1
    
    return answer