(function(){

  /* Implement an algorith to determine if all the characters in the string are unique.
  What if you cannot use additional data structure.*/
  let input  = "abcdefgg";

  console.log("------------isUnique (extra space)--------");
  function isUnique(input){
    let visited =[];
    for(let c of input){
      if(typeof visited[c]!= 'undefined'){
        return false;
      }else{
        visited[c] = 1;
      }
    }
    return true
  }

  console.log("Input: "+input)
  console.log("Is Unique: "+isUnique(input));

  console.log("------------isUnique (no extra space O(nlogn + n))--------");
  function isUnique2(input){
    input = input.split("").sort();
    for(let i=0;i<input.length-1;i++){
      if(input[i] == input[i+1]){
        return false;
      }
    }
    return true;
  }
  console.log("Is Unique: "+isUnique(input));
})();
