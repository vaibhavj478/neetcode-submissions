class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
let flag =  false 
         nums.sort((a,b)=> { if(a-b == 0) flag =true ;   return a -b; })

         return flag

    }
}
