from operator import add
import math

def solution(progresses, speeds):
    answer = []
    while True:
        popIndex = 0
        new_list = []
        #maybe here better computation needs
        
        #test
        if len(progresses)==0:
            break
        #test
        
        multipliedNum = int(math.ceil((100 - progresses[0]) / speeds[0]))
        #added list creation
        for i in range(len(progresses)):
            new_list.append(progresses[i]+(speeds[i]*multipliedNum))
        #print(new_list)
        
        #in here new_list[0] is always 100
        for i in range(len(new_list)):
            if new_list[i] >= 100:
                popIndex += 1
            else:
                break
            #base condition that terminates the condition
            if i == (len(new_list)-1):
                #print('shouldnt be here in the beginning')
                answer.append(len(new_list))
                return answer
        #print('here', answer, popIndex)
        progresses = new_list[popIndex:]
        speeds = speeds[popIndex:]
        answer.append(popIndex)
    return answer