class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stk=[]
        for(const c of s){
            if(c=='('||c=='{'||c=='[')stk.push(c)
            else{
                switch(c){
                    case ')':
                    if(stk[stk.length-1]=='('){
                        stk.pop()
                    }
                    else return false
                    break;
                    case '}':
                    if(stk[stk.length-1]=='{'){
                        stk.pop()
                    }
                    else return false
                    break;
                    case ']':
                    if(stk[stk.length-1]=='['){
                        stk.pop()
                    }
                    else return false
                    break;
                    default:
                    break;
                }
            }
        }

        return stk.length==0
    }
}
