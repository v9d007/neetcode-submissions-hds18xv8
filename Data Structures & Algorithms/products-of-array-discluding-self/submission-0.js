class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1)
        let left = 1
        let right = 1

        for(let i=0; i<nums.length; i++){
            output[i] = left
            left = left*nums[i]
        }

        for(let j=nums.length-1; j>=0; j--){
            output[j] = output[j]*right
            right = right*nums[j]
        }

        return output
    }
}
