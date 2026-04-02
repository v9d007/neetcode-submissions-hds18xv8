class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //using sorting
        //const sorted = nums.sort((a,b) => a-b)

        //Brute force
        // let smallest = nums[0]
        // for(const num of nums){
        //     smallest = Math.min(smallest, num)
        // }

        // Base case
        if (nums.length === 1) return nums[0]
        if (nums.length === 2) return Math.min(nums[0], nums[1])

        let mid = Math.floor(nums.length / 2)

        console.log("mid---",mid)

        if (nums[mid] >= nums[nums.length - 1]) {
            console.log(nums.slice(mid))
            return this.findMin(nums.slice(mid))
        } 
        else {
            console.log(nums.slice(0, mid+1))
            return this.findMin(nums.slice(0, mid+1))
        }
    }
}
