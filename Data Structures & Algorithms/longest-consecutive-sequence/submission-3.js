class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0

        //Brute force with sorting
        // const sortArr = nums.sort((a, b) => a - b);

        // console.log(sortArr)

        // for(let i=0; i<sortArr.length; i++){
        //     let temLongest = 1
        //     let current = sortArr[i]
        //     for(let j=i+1; j<sortArr.length; j++){
        //         if(sortArr[j] === current + 1){
        //             temLongest++;
        //             current = sortArr[j]
        //         }
        //     }
        //     longest = Math.max(longest, temLongest)
        // }

        //Using HashMap

        let seqMap = new Set(nums)

        for(let i=0; i<nums.length; i++){
            let tempLong = 1

            if(!seqMap.has(nums[i]-1)){
                let num = nums[i]+1
                while(seqMap.has(num)){
                    tempLong++
                    num++
                }
            }
            longest = Math.max(longest, tempLong)
        }

        return longest
    }
}
