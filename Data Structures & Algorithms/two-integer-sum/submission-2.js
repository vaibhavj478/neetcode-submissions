class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

   let bag = new Map();

    for(let i = 0 ;  i < nums.length ; i++  ){


        let compliment =  target -  nums[i] ;

        if(bag.has(compliment)  ){

            return [bag.get(compliment)  ,  i ];
        }

        bag.set(nums[i] ,  i );

    }




    }
}
