class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_str = ""
        for(const str of strs){
            const strLn = str.length
            encoded_str += `${strLn}#${str}`
        }

        return encoded_str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = []
        let i = 0

        while(i < str.length){
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i,j));
            const subStr = str.substring(j + 1, j + 1 + length);
            strs.push(subStr);
            i = j + 1 + length;
        }

        return strs
    }
}