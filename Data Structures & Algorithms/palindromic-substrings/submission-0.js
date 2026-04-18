class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let total = 0

        function isValidPalindrom(left, right){
            if(left >= right) return true

            if(s[left] != s[right]) return false
            left++
            right--
            return isValidPalindrom(left, right)
        }

        for(let i=0; i<s.length; i++){
            for(let j=i; j<s.length; j++){
                if(isValidPalindrom(i,j)){
                    total++
                }
            }
        }

        return total
    }
}
