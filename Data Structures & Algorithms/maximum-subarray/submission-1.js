class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let l = 0
        let r = 0
        let sum = nums[0]
        let temp = 0

        while(l<=r && r<nums.length){
            temp += nums[r]
            sum = Math.max(sum, temp)
            r++

            console.log("first", temp, sum, r)

            if(temp <= 0){
                l = r
                temp = 0
                console.log("second", temp, sum, r)
            }
        }

        return sum
    }
}
