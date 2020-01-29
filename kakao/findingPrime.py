import math

def solution(numbers):
    answer = 0
    #first create is prime function
    def isPrime(number):
        #check till the squared number and return true for prime else for not
        
        #squre root of the parameter
        if number == 2:
            return True
        
        if number < 9:
            #do this
            limit = [2]
        else:
            limit = [i for i in range(2,int(math.sqrt(number)))]
        
        #while loop to both take out the number from limit & check if number is prime
        currentIndex = 0
        while True:
            if len(limit) == 1:
                #then run it once and return
                if number % limit[0] == 0:
                    return False
                else:
                    return True
            else:
                if (number % limit[currentIndex] == 0):
                    return False
                else:
                    for i in limit:
                        if i % number[currentIndex]==0 and i != number[currentIndex]:
                            limit.remove(i)
                    currentIndex += 1
                    
        
    print(isPrime(11))
        
    return answer