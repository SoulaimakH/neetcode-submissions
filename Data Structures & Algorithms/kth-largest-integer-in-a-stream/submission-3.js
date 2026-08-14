class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
      this.k = k;
        // Sort descending so the kth largest is easy to find
        this.nums = nums.sort((a, b) => b - a); 
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val)
        this.nums.sort((a, b) => a - b); 
        return this.nums[this.nums.length-this.k]

        }
}
