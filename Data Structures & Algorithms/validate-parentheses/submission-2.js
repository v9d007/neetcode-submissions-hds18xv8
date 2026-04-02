class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = []

        const bracketObj = {
            '(':')',
            '{':'}',
            '[':']'
        }

        for(const bracket of s){
            console.log(bracket)
            if(arr.length && (bracket === bracketObj[arr[arr.length-1]])){
                arr.pop()

            }else{
                arr.push(bracket)
            }
        }

        return arr.length === 0
    }
}
