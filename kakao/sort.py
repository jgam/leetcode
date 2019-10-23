import operator


def solution(N, stages):
    answer = []
    #stages hashmap with probability
    stage_probability = {}
    stageCount = dict.fromkeys(range(1,N+1),0)
    sortedStages = sorted(stages)
    index = 0
    
    currentLevel = 1
    current_length = len(stages)
    
    one_more = False
    for i in range(len(sortedStages)):
        if sortedStages[i] > N:
            if one_more:
                break
            else:
                if sortedStages[i] != currentLevel:
                    currentLevel = sortedStages[i]
                    temp_length = stageCount[sortedStages[i-1]]
                    
                    stageCount[sortedStages[i-1]] = float(stageCount[sortedStages[i-1]])/current_length
                    current_length -= temp_length
                    one_more = True
        else:
            if sortedStages[i] != currentLevel:
                currentLevel = sortedStages[i]
                temp_length = stageCount[sortedStages[i-1]]
                
                stageCount[sortedStages[i-1]] = float(stageCount[sortedStages[i-1]])/current_length
                current_length -= temp_length
                
            stageCount[sortedStages[i]] += 1
        
    sorted_x = sorted(stageCount.items(), key=operator.itemgetter(1), reverse=True)
    
    return sorted_x