class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let min = prices[0]

        for(const price of prices){
            if(price > min){
                profit = Math.max((price-min), profit)
            }else{
                min = price
            }
        }

        return profit
    }
}
