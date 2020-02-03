def deleteColumns(A): 
  
    # Length of each string 
    l = len(A[0]) 
  
    # Initialize dp array 
    dp = [1] * l 
  
    for i in range(l - 2, -1, -1): 
        for j in range(i + 1, l): 
            if all(row[i] <= row[j] for row in A): 
                dp[i] = max(dp[i], 1 + dp[j]) 
  
    # Return result 
    return l - max(dp) 
  
  
# Driver Code 
arr = ["hello", "geeks"] 
  
# Function call to print required answer 
print(deleteColumns(arr)) 