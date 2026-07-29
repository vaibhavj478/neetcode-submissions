class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

// const  str =  s.toLowerCase().replace(/[^a-z0-9]/g, "")

let left = 0 ;
let right =  s.length - 1;  

const nonCharAndNum  =  /[^a-z0-9]/i

while(left<= right){

    while(left < right && nonCharAndNum.test(s[left])){
left++;
    }

   while(left < right && nonCharAndNum.test(s[right])){
right--;
    }




   if(s[left].toLowerCase() != s[right].toLowerCase()){

    return false
   }

   left++;
   right--;


}
return true 

    }
}
