class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = []
        for(const bracket of s){
            console.log(bracket)
            if(arr.length && (bracket === ')' && arr[arr.length-1] === '(') 
                    || (bracket === '}' && arr[arr.length-1] === '{') 
                    || (bracket === ']' && arr[arr.length-1] === '[')){
                arr.pop()

            }else{
                arr.push(bracket)
            }
        }

        return arr.length === 0
    }
}
