class Solution {
    
    /**
     * @param {number[]} stones
     * @return {number}
     */

    swap(i:number,j:number,stones: number[]){
        let val=stones[i]
        stones[i]=stones[j]
        stones[j]=val
    return stones
    }
    
    up(index:number,stones){
        while(index>0){
            if(stones[index]>stones[index-1])break
            stones=this.swap(index,index-1,stones)
            index=index-1
        }
        return stones
    }
    task:number[]=[]

    lastStoneWeight(stones: number[]): number {
        for(const n of stones) {
            this.task.push(n)
            this.task=this.up(this.task.length-1,this.task)
        }

        while(this.task.length>1){
            let val=Math.max( this.task[this.task.length-1], this.task[this.task.length-2])-Math.min( this.task[this.task.length-1], this.task[this.task.length-2])
            this.task.pop()
            this.task.pop()
            if(val!=0)
            {
                this.task.push(val)
                this.task=this.up(this.task.length-1,this.task)
            }  
        }
        if(this.task.length) return this.task[0]
        return 0
    }
}
