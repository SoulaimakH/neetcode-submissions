class MinStack {
      private stack: number[][];
    private minstack=[]
    constructor() {
        this.stack = [];
         this.minstack= [];
    }
    swap(i,j){
        let r= this.minstack[i]
        this.minstack[i]=this.minstack[j]
        this.minstack[j]=r
    }
    down(index):number{
        while(index>0){
            if(this.minstack[index]>this.minstack[index-1]){
            this.swap(index,index-1)
            index--
            }
            else{
                return index
            }
            
        }
    return index
        
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {  
        this.minstack.push(val)
        let index=this.down(this.minstack.length-1)
        let ar=[index,val]
        this.stack.push(ar)
    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.stack.length){
        let remv=this.stack[this.stack.length - 1]
        this.stack.pop()
        this.minstack.splice(remv[0], 1) 
      
         }        
        else return null
    }

    /**
     * @return {number}
     */
    top(): number {
        if(this.stack.length>0)
        return this.stack[this.stack.length-1][1]
        else return null
    }

    /**
     * @return {number}
     */
    getMin(): number {
       //console.log(this.stack,this.minstack)
        if(this.minstack.length>0)
        return this.minstack[this.minstack.length-1]
        else return null
    }
}
