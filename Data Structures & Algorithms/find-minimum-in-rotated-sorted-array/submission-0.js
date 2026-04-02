class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const sorted = nums.sort((a,b) => a-b)

        return sorted[0]
    }
}
