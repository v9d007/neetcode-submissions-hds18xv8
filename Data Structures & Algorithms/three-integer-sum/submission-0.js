class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = new Map()
        nums.sort((a, b) => a - b);
        for(let i=0; i<nums.length; i++){
            const current = nums[i]
            const numMap = new Map()
            for(let j=i+1; j<nums.length; j++){
                const remaining = 0-current-nums[j]
                if(numMap.has(remaining)){
                    const triplet = [current, nums[j], remaining].sort((a, b) => a - b);
                    const code = triplet.join(',');
                    if(!output.has(code)){
                        output.set(code, triplet)
                    }
                }else{
                    numMap.set(nums[j],1)
                }
            }
        }

        let finalArr = []
        for(const value of output.values()){
            finalArr.push(value)
        }

        return finalArr
    }
}