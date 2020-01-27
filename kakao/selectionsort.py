# Complete the maximumToys function below.
def maximumToys(prices, k):
    toyCount = 0
    for i in prices:
        for j in range(len(prices)):
            currentMin = min(prices)
            if (k - currentMin) < 0:
                return toyCount
            toyCount += 1
            k -= currentMin
            prices.remove(currentMin)
    return len(prices)
