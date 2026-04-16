class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length===1) return nums[0]
        let first1 = 0
        let second1 = 0

        let first2 = 0
        let second2 = 0

        for(let i=0; i<nums.length-1; i++){
            const temp = Math.max((nums[i]+first1),second1)
            first1 = second1
            second1 = temp
        }

        for(let i=1; i<nums.length; i++){
            const temp = Math.max((nums[i]+first2),second2)
            first2 = second2
            second2 = temp
        }

        return Math.max(second1, second2)
    }
}
