class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let current = 0
        let longest = 0
        const strMap = new Map()

        for(let i=0; i<s.length; i++){
            if(strMap.has(s[i]) && (strMap.get(s[i])>=current)){
                current = strMap.get(s[i])+1  
            }
            longest = Math.max(longest, (i-current+1))
            strMap.set(s[i],i)
        }

        return longest
    }
}
