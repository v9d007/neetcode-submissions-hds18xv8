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
            if(strMap.has(s[i].charCodeAt(0)) && (strMap.get(s[i].charCodeAt(0))>=current)){
                current = strMap.get(s[i].charCodeAt(0))+1  
            }
            longest = Math.max(longest, (i-current+1))
            strMap.set(s[i].charCodeAt(0),i)
        }

        return longest
    }
}
