class Solution:
    def twoSum(self, nums, target):
        '''
        :type nums:  List[int]
        :type target:  int
        :rtype:  List[int]
        '''
        while len(nums)>1:
            temp_num = nums.pop()
            for num in nums:
                if temp_num+num == target:
                    return [len(nums),nums.index(num)]
                continue
                
                
if __name__ == '__main__':
    nums = [2, 7, 11,15]
    target = 9
    solution = Solution()
    solution.twoSum(nums, target)
