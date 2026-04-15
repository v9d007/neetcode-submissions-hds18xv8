class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let h1 = 0 
        let h2 = 0

        for(const n of nums){
            const temp = Math.max((h1+n), h2)
            h1 = h2
            h2 = temp
        }

        return h2
    }
}
