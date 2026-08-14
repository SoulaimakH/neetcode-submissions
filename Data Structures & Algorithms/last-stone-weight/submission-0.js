class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let l=stones.length
        if(stones.length==1)return stones[0]
        if(stones.length==2) return Math.max(stones[l-1],stones[l-2])-Math.min(stones[l-1],stones[l-2])
        stones=stones.sort((a,b)=>a-b)
        
        
           if(stones[l-1]==stones[l-2]){
            stones.pop();
            stones.pop();
           }
           else{
            let newval=Math.max(stones[l-1],stones[l-2])-Math.min(stones[l-1],stones[l-2])
            stones.pop();
            stones.pop();
            stones.push(newval)
           }
           
            console.log(stones)
           return this.lastStoneWeight(stones)

             
        
    }
}
