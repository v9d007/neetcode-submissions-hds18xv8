class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // const sorted = nums.sort((a,b) => a - b)
        // return sorted[nums.length-k]
        k = nums.length - k

        function quickSelect(l, r){
            let pivot = nums[r]
            let p = l

            for(let i=l; i<r; i++){
                if(nums[i]<=pivot){
                    const temp = nums[p]
                    nums[p] = nums[i] 
                    nums[i] = temp
                    p++
                }
            }

            const temp = nums[r]
            nums[r] = nums[p] 
            nums[p] = temp

            if(p < k){
                return quickSelect(p+1,r)
            }else if(p > k){
                return quickSelect(l, p-1)
            }else{
                return nums[p]
            }
        }

        return quickSelect(0, nums.length-1)
    }
}
