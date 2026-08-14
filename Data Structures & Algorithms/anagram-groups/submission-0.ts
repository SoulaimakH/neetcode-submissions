class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagrams(s:string,t:string){
        if (s.length !== t.length) return false;
        const ssort = [...s].sort().join("");
  const tsort = [...t].sort().join("");

  return ssort === tsort; 
    }
    groupAnagrams(strs: string[]) {
     const result=[]
     const indexset=new Set()
     for(let i=0;i<strs.length;i++){
        let newtab=[strs[i]]
        if( !indexset.has(i)){
            for(let j=i+1;j<strs.length;j++){
        if(this.isAnagrams(strs[i],strs[j])) {
            newtab.push(strs[j]);
            indexset.add(j)
        }
        
     }
        result.push(newtab)
        }
        
     }
     
    return result
    }
}
