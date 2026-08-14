class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    
    maxProfit(prices: number[]): number {
        let s=1
        let b=0
        let p=0
        while(s<prices.length){
            if(prices[b]>prices[s]){
                b=s
                
            }
            else{
                p=Math.max(p,prices[s]-prices[b])
                
            }
            s++
        }
        return p
    }
}
/*
i iterator present the ith day 
p[i] :  price

look for p[i]-p[j]>0 where j<i


*/ 