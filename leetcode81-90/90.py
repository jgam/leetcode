class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        nums1 = nums1[:m]
        secondIndex = 0
        firstIndex = 0
        
        if n != 0:
            for i in range(m):
                if nums1[firstIndex] > nums2[secondIndex]:
                    nums1.insert(firstIndex, nums2[secondIndex])
                    secondIndex += 1
                firstIndex += 1
        if secondIndex < n-1:
            nums1 = nums1 + nums2[secondIndex:]
                    
        return nums1
