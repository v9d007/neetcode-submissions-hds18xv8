class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo={}) {
        //Brute force optimised with memoisation
        // if(n in memo) return memo[n]
        // if (n <= 2) return n

        // memo[n] = this.climbStairs(n-1, memo) + this.climbStairs(n-2, memo)   
        // return memo[n]

        //f(n) = f(n-1) + f(n-2) pattern 

        let first = 1
        let second = 0

        for(let i=0; i<n; i++){
            const temp = first
            first = first + second
            second = temp
        }

        return first
    }
}
