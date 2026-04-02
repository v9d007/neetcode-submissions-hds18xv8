class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //Brute force
        let longest = 0
        const sortArr = nums.sort((a, b) => a - b);

        console.log(sortArr)

        for(let i=0; i<sortArr.length; i++){
            let temLongest = 1
            let current = sortArr[i]
            for(let j=i+1; j<sortArr.length; j++){
                if(sortArr[j] === current + 1){
                    temLongest++;
                    current = sortArr[j]
                }
            }
            longest = Math.max(longest, temLongest)
        }

        return longest
    }
}
