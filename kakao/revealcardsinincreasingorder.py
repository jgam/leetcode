class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        #every card has a unique integer
        deck.sort()
        
        #two lists one index the other answer
        index = collections.deque(range(len(deck)))
        #print(index)
        ans = [None] * (len(deck))
        
        for i in deck:
            #print(index)
            ans[index.popleft()] = i
            if index:
                added = index.popleft()
                index.append(added)
        return ans
            