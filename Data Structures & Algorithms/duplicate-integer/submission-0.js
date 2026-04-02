class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        //brute force
        // for(let i=0; i<nums.length; i++){
        //     for(let j=i+1; j<nums.length; j++){
        //         if(nums[i]===nums[j]){
        //             return true
        //         }
        //     }
        // }
        // return false

        //use set

        const freqSet = new Set()

        for(const num of nums){
            if(freqSet.has(num)){
                return true
            }
            freqSet.add(num)
        }

        return false
    }
}
