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

                console.log("arr1",arr)

            }else{
                arr.push(bracket)
                console.log("arr 2----",arr)
            }
        }

        return arr.length === 0
    }
}
