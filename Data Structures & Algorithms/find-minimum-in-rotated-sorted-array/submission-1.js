class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //using sorting
        //const sorted = nums.sort((a,b) => a-b)

        //Brute force
        let smallest = nums[0]
        for(const num of nums){
            smallest = Math.min(smallest, num)
        }

        return smallest
    }
}
