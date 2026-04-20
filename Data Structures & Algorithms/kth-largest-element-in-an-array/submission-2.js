class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const sorted = nums.sort((a,b) => b - a)
        console.log(sorted)
        return sorted[k-1]
    }
}
