class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    longestPalindrome(s) {
        let start = 0
        let end = 0
        
        function tempLongestPalinLength(left,right){
            while(left>=0 && right<s.length && s[left] === s[right]){
                left--;
                right++;
            }
            return right-left-1
        }

        for(let i=0; i<s.length; i++){
            const len1 = tempLongestPalinLength(i,i,s)
            const len2 = tempLongestPalinLength(i,i+1,s)
            const maxLen = Math.max(len1, len2)

            if (maxLen > end - start) {
                start = i - Math.floor((maxLen - 1) / 2);
                end = i + Math.floor(maxLen / 2);
            }
        }

        return s.substring(start, end+1)
    }
}
