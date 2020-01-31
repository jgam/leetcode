def solution(genres, plays):
    answer = []
    '''
    {
        "classic": [[maxNum, index], [maxNum2,index2], totalNum]
    }
    '''
    #then sort the dict by its totalNum
    #then loop to get the maxNum and maxNum2
    
    compDict = {}
    
    for i in range(len(genres)):
        if genres[i] in compDict:
            #then compare num and everything
            #first - maxNum  compDict[genres[i]][0][0]
            if plays[i] > compDict[genres[i]][0][0]:
                #if current play becomes the biggest replace everything
                compDict[genres[i]][1][0] = compDict[genres[i]][0][0]
                compDict[genres[i]][1][1] = compDict[genres[i]][0][1]
                compDict[genres[i]][0][0] = plays[i]
                compDict[genres[i]][0][1] = i
                
            elif plays[i] > compDict[genres[i]][1][0]:
                compDict[genres[i]][1][0] = plays[i]
                compDict[genres[i]][1][1] = i
            #second - maxNum2  compDict[genres[i]][1][0]
            #total - totalNum  compDict[genres[i]][2]
            compDict[genres[i]][2] += plays[i]
        else:
            compDict[genres[i]] = [[plays[i],i], [plays[i],i], plays[i]]
    #print(compDict)
    
    #sort the dict according to the maxNum
    finalList = sorted(compDict.values(), key=lambda x: x[2], reverse=True)
    #print(finalList)
    for i in finalList:
        #here compare well
        answer.append(i[0][1])
        if i[0][0] == i[1][0] and i[0][1] == i[1][1]:
            continue
        else:
            answer.append(i[1][1])
    return answer