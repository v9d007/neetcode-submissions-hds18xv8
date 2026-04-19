class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charArr = new Array(26).fill(0)
        let maxFreq = 0
        let left = 0
        let right = 0
        let maxLength = 0

        while(left<=right && right<s.length){
            if((right-left+1)<=maxLength) return maxLength
            charArr[s.charCodeAt(right)-65] += 1

            console.log(charArr)

            maxFreq = Math.max(charArr[s.charCodeAt(right)-65], maxFreq)
            console.log("maxFreq",maxFreq)
            if(((right-left+1) - maxFreq) <= k){
                maxLength = Math.max(maxLength, (right-left+1))
            }else{
                charArr[s.charCodeAt(left)-65] -= 1
                left++
            }
            right++
            console.log("maxLwength",maxLength)
        }

        return maxLength
    }
}
