(function(){
  /*
    Write a function to check if given string is a permutation of a palindrome.
    Example:
    Input: Tact Coa
    Output: True (taco cat is a palindrome)
  */
  
  let input = "Tact Coa";
  console.log("--------Is permutation of a plaindrome-----------");
  function isPalindromePermutation(input){
    input = input.toLowerCase();
    let visited = new Map();

    for(let c of input){
      if( "a"<= c &&  c<="Z"){
        let val = visited.has(c) ? visited.get(c)+1 : 1;
        visited.set(c,val);
      }
    }
    let oddCount=0;
    visited.forEach((val,key)=>{
      if(val%2 !=0)new Promise(function(resolve, reject) {
        oddCount++;
      });
    });
    return (oddCount > 1) ? false: true;

  }
  console.log("Is permutation of a plaindrome: "+isPalindromePermutation(input));
  console.log("Complexity: space: O(n), space: O(n)");
})();
