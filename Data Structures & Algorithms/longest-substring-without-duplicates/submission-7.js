class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = 0

        for(let i=0; i<s.length; i++){
            let current = i
            let subs = ""

            while(current < s.length && !subs.includes(s[current])){
                subs = subs + s[current]
                current++
            }

            count = Math.max(subs.length, count)
        }

        return count
    }
}
