class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;
        let one = 1
        let two = 0

        for(let i=0; i<n; i++){
            let temp = one
            one = two + one
            two = temp
        }

        return one
    }
}
