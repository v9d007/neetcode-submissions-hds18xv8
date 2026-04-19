class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Array(26).fill(0)
        let left = 0
        let maxFreq = 0
        let maxLength = 0

        for (let right = 0; right < s.length; right++) {
            let index = s[right].charCodeAt(0) - 65
            count[index]++

            maxFreq = Math.max(maxFreq, count[index])

            // if invalid window
            while ((right - left + 1) - maxFreq > k) {
                count[s[left].charCodeAt(0) - 65]--
                left++
            }

            maxLength = Math.max(maxLength, right - left + 1)
        }

        return maxLength
    }
}
