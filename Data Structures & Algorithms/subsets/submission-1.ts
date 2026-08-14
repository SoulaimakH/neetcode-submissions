class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
  subsets(nums: number[]): number[][] {
    let res: number[][] = [[]];

    for (let num of nums) {
        let newSubsets: number[][] = [];

        for (let subset of res) {
            newSubsets.push([...subset, num]);
        }

        res.push(...newSubsets);
    }

    return res;
}
}