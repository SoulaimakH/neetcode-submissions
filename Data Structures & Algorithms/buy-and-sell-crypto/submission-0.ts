class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l=prices.length
        let m=0
       for(let i=l-1;i>=0;i--){
        for(let j=i-1;j>=0;j--){
            
            let r=prices[i]-prices[j]
            m=Math.max(m,r)
        }
       }
       return m
    }
}
/*
i iterator present the ith day 
p[i] :  price

look for p[i]-p[j]>0 where j<i


*/ 