# W H X Y Player

# 20 10 5 0 3

from sys import stdin
'''
#inputList = map(str, stdin.read().split())
while True:
    try:
        lists = input().split()
    except EOFError:
        break
'''


def solution(inputList):
    # W H X Y Player

    # 20 10 5 0 3

    width = inputList[0]
    height = inputList[1]
    xaxis = inputList[2]
    yaxis = inputList[3]
    numPlayers = inputList[4]

    def circleCheck(x, y):
        return 0

    def squareCheck(x, y):
        #global width
        #global height
        if x >= xaxis and x <= (width+xaxis):
            if y >= yaxis and y <= (yaxis+height):
                return 1
        return 0
    squareCheck(1, 2)
    # for


solution([20, 10, 5, 0, 3])
