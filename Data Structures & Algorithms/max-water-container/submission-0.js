class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maximum = 0
        let left = 0
        let right = heights.length-1

        while(right>=left){
            let tempMax = 0
            if(heights[right]>heights[left]){
                tempMax = heights[left]*(right-left)
                left++
            }else{
                tempMax = heights[right]*(right-left)
                right--
            }
            maximum = Math.max(maximum, tempMax)
        }

        return maximum
    }
}
