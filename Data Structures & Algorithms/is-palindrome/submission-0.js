class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sFltr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let left = 0
        let right = sFltr.length-1

        while(left<=right){
            if(sFltr[left] != sFltr[right]) return false
            left++;
            right--;
        }

        return true
    }
}
