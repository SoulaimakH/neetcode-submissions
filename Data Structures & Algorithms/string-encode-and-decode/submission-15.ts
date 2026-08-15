class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = [];
        for (let s of strs) {
            res.push(String(s.length), '/', s);
        }
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        console.log(str)
        while (i < str.length) {
            let j = i;
            while (str[j] !== '/') {
                j++;
            }
             console.log(str[j])
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            console.log(str.substring(i, j))
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}