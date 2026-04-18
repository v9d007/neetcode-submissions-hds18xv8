class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let total = 0
         function countAllPossiblePalidromFor(left, right){
            while(left >=0 && right<s.length && s[left] === s[right]){
                total++
                left--
                right++
            }
         }
    
        for(let i=0; i<s.length; i++){
            countAllPossiblePalidromFor(i,i)
            countAllPossiblePalidromFor(i,i+1)
        }

        return total
    }
}
