class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false

        //sorting
        // const sSort = s.split("").sort().join()
        // const tSort = t.split("").sort().join()

        // console.log(sSort)
        // console.log(tSort)
        // return  sSort == tSort

        //Character counting

        let freq = new Map()

        for(let i=0; i<s.length; i++){
            freq.set(s[i], (freq.get(s[i]) ?? 0)+1)
            freq.set(t[i], (freq.get(t[i]) ?? 0)-1)
        }

        for (const value of freq.values()){
            if(value != 0) return false
        }

        return true
    }
}
