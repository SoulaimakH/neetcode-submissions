class NumArray {
    /**
     * @param {number[]} nums
     */
    nums:number[]
    constructor(nums: number[]) {
        this.nums=nums
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        let sum=0
        //console.log("/")
        while(left<=right){
          // console.log(left,right,this.nums[left],this.nums[right])
           if(left!=right)
            sum+=this.nums[left]+this.nums[right]
            else
             sum+=this.nums[left]
            left++
            right--
        }
        //sum+=this.nums[right]
        return sum
    }
}
