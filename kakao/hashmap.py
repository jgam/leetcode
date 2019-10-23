#ii
def solution(record):
    answer = []
    hashmap = {"Enter":"님이 들어왔습니다.", "Leave":"님이 나갔습니다."}
    idmap = {}
    return_record = []
    
    for i in record:
        current = i.split(" ")
        #print(current)
        if current[0]=="Leave" :
            #
            return_record.append([current[0], current[1]])
        elif current[0] == "Change":
            idmap[current[1]] = current[2]
        else:
            idmap[current[1]] = current[2]
            return_record.append([current[0], current[1]])
    
    for i in return_record:
        answer.append(idmap[i[1]]+hashmap[i[0]])

    return answer