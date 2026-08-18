class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        if(s.includes(t))return 0
        if(!(s.includes(t[0]))) return t.length
        else{
            let max=t.length
            let j=0
            let i=s.indexOf(t[0])

            while(i<s.length && j<t.length){
                //console.log(i,j,s.substring(i,j+1),t[j])
                if(s.substring(i,s.length).indexOf(t[j])>=0){
                i=s.substring(i,s.length).indexOf(t[j])+i
                }else{
                    break
                }
                for(let c of s.substring(i,s.length)){
                    if(j<t.length){
                        if(c==t[j]){
                            
                        max--
                    j++
                        } else break

                    }
                    else {break}
                    i++
                }
               // console.log(i,j,s.substring(i,s.length),t[j],s.substring(i+j,s.length).indexOf(t[j])>=0)
              //  console.log(s.substring(i,j+1),t[j],j,max,s.indexOf(t[j]) )
             
                
                 //console.log(i,j,s.substring(i,j+1),t[j])
               // break
            }
            
            
           return max 
        }
        
    }
}
