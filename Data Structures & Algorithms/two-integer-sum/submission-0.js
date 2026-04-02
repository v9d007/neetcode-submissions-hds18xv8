class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map()
        
        for(let i=0; i<nums.length; i++){
            let offset = target - nums[i]

            if(numMap.has(offset)){
                return [numMap.get(offset), i]
            }
            numMap.set(nums[i], i)
        }
    }
}
