class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let total = 0
        let subMap = new Map()

        function isValidPalindrom(left, right){
            if(left >= right) return true
            const key = s.substring(left,right+1)
            if(subMap.has(key)) return subMap.get(key)

            if(s[left] != s[right]) return false
            left++
            right--
            return isValidPalindrom(left, right)
        }

        for(let i=0; i<s.length; i++){
            for(let j=i; j<s.length; j++){
                const key = s.substring(i,j+1)

                if(isValidPalindrom(i,j)){
                    subMap.set(key, true)
                    total++
                }else{
                    subMap.set(key, false)
                }
            }
        }

        return total
    }
}
