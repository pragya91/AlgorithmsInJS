(function(){
  /*
Given an array, print the Next Greater Element (NGE) for every element. The Next greater Element for an element x is the first greater element on the right side of x in array. Elements for which no greater element exist, consider next greater element as ­1. Examples:
a) For any array, rightmost element always has next greater element as ­1.
b) For an array which is sorted in decreasing order, all elements have next greater element as ­1. c) For the input array [4, 5, 2, 25}, the next greater elements for each element are as follows. Element NGE
4 ­­> 5
5 ­­> 25
2 ­­> 25
25 ­­> ­-1*/

  console.log("-------Find next greater element-----");
  function nextGreaterElement(input){
    let stack = [];
    stack.push(input[0]);
    let cur = 1;
    while(cur < input.length){
      let poppedElement = stack.pop();
      if(poppedElement < input[cur]){
        console.log(poppedElement + "-->"+input[cur]);
        if(!stack.length){
          stack.push(input[cur]);
          cur+=1;
        }
      }else if(poppedElement > input[cur]){
          stack.push(poppedElement);
          stack.push(input[cur]);
          cur+=1;
      }
    }
    while(stack.length){
      let poppedElement = stack.pop();
      console.log(poppedElement + "--> -1");
    }
  }
  nextGreaterElement([3,11,5,26,17,18]);
})();
