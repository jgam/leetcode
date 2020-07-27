def solution(budgets, M):
    answer = 0
    budgets.sort()
    lenBudgets = len(budgets)
    # print(budgets)
    current = 0
    
    import math
    
    for i in range(len(budgets)):
        if budgets[i] * (len(budgets)-i) <= M-current:
            current += budgets[i]
            continue
        else:
            numLeft = len(budgets) - i
            return math.floor((M-current) / numLeft)
    return budgets[-1]
