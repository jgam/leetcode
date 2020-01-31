def solution(phone_book):
    answer = True
    phone_book.sort(key= lambda x: len(x))
    lengthBook = list(set([len(i) for i in phone_book]))
    print(lengthBook)
    print(phone_book)
    #now sorted with length
    #while True:
    for i in lengthBook:#[2,3,5]
        compList = []
        for j in phone_book:#[12,88...]
            compList.append(j[:i])
        if len(set(compList)) != len(compList):
            return False
    return answer