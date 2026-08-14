class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    /*
    validate each condition alloawn

    validate 3*3 
    validate rows 
    validate columne 

    if one condition not valide return false directly 
    else continue 

    if all is valide return true
    */
    validatematrix33(m,i:number,j:number){
        const map: ReadonlyMap<number, readonly number[]> = new Map([
            [0, [0, 1, 2]],
            [1, [0, 1, 2]],
            [2, [0, 1, 2]]
            ]);
            console.log(map)
            let set=new Set()
             for (const [k, values] of map) {
                 for (const v of values) {
                let e=m[k+i][v+j]
                //console.log('()',k+i,v+j,')',e)
                if(e!='.'){
                    if(set.has(e))return false
                    else set.add(e)
                }
                 }
             }
          return true 
        }
    
    isValidSudoku(board: string[][]): boolean {
     //   console.log(board[0][0],board[0][1],board[0][2],board[1][0],board[1][1],)
        const map: ReadonlyMap<number, readonly number[]> = new Map([
            [0, [0, 3, 6]],
            [3, [0, 3, 6]],
            [6, [0, 3, 6]]
            ]);
        for (const [k, values] of map) {
                 for (const v of values) {
        if(!this.validatematrix33(board,k,v)) return false
        
        }
        let il=0
        let ir=board.length-1
        while(il<=ir){
          let jl=0
        let jr=board[0].length-1
        let setrh =new Set()
        let setrd=new Set()
        while(jl<jr){
         //  console.log(il,jl,'-',il,jr,'-',ir,jl,'-',ir,jr)
           //haut row check
            if(board[il][jl]!='.'){
                let e=board[il][jl]
                 if(setrh.has(e))return false
                    else setrh.add(e)
            }

            if(board[il][jr]!='.'){
                let e=board[il][jr]
                 if(setrh.has(e))return false
                    else setrh.add(e)
            }
        //down row check
            if(board[ir][jl]!='.'){
                let e=board[ir][jl]
                 if(setrd.has(e))return false
                    else setrd.add(e)
            }

            if(board[ir][jr]!='.'){
                let e=board[ir][jr]
                 if(setrd.has(e))return false
                    else setrd.add(e)
            }


        jl++
        jr--
        }

//last haut row check
            if(board[il][jl]!='.'){
                let e=board[il][jl]
                 if(setrh.has(e))return false
                    else setrh.add(e)
            }
//last down row check
            if(board[ir][jl]!='.'){
                let e=board[ir][jl]
                 if(setrd.has(e))return false
                    else setrd.add(e)
            }

        il++
        ir--
        }


///colum check 


         il=0
         ir=board.length-1
        while(il<=ir){
          let jl=0
        let jr=board[0].length-1
        let setcright =new Set()
        let setcleft=new Set()
        while(jl<jr){
          // console.log(jl,il,'-',jr,il,'-',jr,ir,'-',jl,ir)
        
//c left
         if(board[jl][il]!='.'){
                let e=board[jl][il]
                 if(setcleft.has(e))return false
                    else setcleft.add(e)
            }

            if(board[jr][il]!='.'){
                let e=board[jr][il]
                 if(setcleft.has(e))return false
                    else setcleft.add(e)
            }
        //c right  jr,ir
            if(board[jr][ir]!='.'){
                let e=board[jr][ir]
                 if(setcright.has(e))return false
                    else setcright.add(e)
            }
//jl,ir
            if(board[jl][ir]!='.'){
                let e=board[jl][ir]
                 if(setcright.has(e))return false
                    else setcright.add(e)
            }


        jl++
        jr--
        }

//last c left check
            if(board[jl][il]!='.'){
                let e=board[jl][il]
                 if(setcleft.has(e))return false
                    else setcleft.add(e)
            }
//last right c check
            if(board[jl][ir]!='.'){
                let e=board[jl][ir]
                 if(setcright.has(e))return false
                    else setcright.add(e)
            }

        il++
        ir--
        }




        return true
    }
}
}
