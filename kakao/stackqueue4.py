def solution(priorities, location):
    answer = 0
    #if there exists anything larger than don't do
    ret = []
    currentMax = max(priorities)
    locationList = [i for i in range(len(priorities))]
    
    #popping should be done together
    #relocation should be done together
    
    while True:
        maxIndex = priorities.index(currentMax)
        #relocation should be done here
        if locationList[maxIndex] == location:
            return len(ret)+1#this +1 because it is not indexing
        else:
            ret.append(locationList[maxIndex])
        
        #relocation and automatic taking out of current Max
        priorities = priorities[maxIndex+1:] + priorities[:maxIndex]
        locationList = locationList[maxIndex+1:] + locationList[:maxIndex]
        
        #currentMax needs to be updated later
        currentMax = max(priorities)
    #return answer