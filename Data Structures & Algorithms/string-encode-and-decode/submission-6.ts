class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    key=1
    encode(strs: string[]): string {
    
        let result="s/pA"
        if(strs.length==0)return "`"
        for(let s of strs){
            let newstring=""
            for( let c of s){
                 newstring=newstring+String.fromCharCode(c.charCodeAt(0) + this.key);
            
            }
            if(result=="s/pA")result=newstring
            
            else result=result+"s/pA"+newstring
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str=="`")return []
        let arraystring=str.split("s/pA")
        for(let i=0;i<arraystring.length;i++){
            let newstring=""
            for( let c of arraystring[i]){
                
                 newstring=newstring+String.fromCharCode(c.charCodeAt(0) - this.key);
          
            }
            arraystring[i]=newstring
        }
    return arraystring
    }
}
