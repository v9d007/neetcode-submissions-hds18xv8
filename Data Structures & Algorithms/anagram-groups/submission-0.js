class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let strMap = new Map()
        for(const str of strs){
            let strCode = str.split("").sort().join()

            // for(const c of str){
            //     strCode.set(c, (strCode.get(c) ?? 0)+1)
            // }
            
            let list = strMap.get(strCode) ?? []
            list.push(str)
            strMap.set(strCode, list)
        }

        let outputArr = []
        for(const value of strMap.values()){
            outputArr.push(value)
        }

        return outputArr
    }
}