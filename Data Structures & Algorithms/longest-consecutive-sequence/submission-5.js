class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set()
        let max = 0

        for(const num of nums){
            numSet.add(num)
        }

        for(let i=0; i<nums.length; i++){
            let temp = 0
            let current = nums[i]

            if(!numSet.has(nums[i]-1)){
                while(numSet.has(current)){
                    temp++
                    max = Math.max(max, temp)
                    current++
                }
            }
        }

        return max
    }
}
