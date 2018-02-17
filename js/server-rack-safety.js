(function(){
  /*You are appointed as a system admin in a firm, and it is your responsibility to check the safety of the server racks in one of the server rooms. The server racks are arranged in an array. If any rack reaches another rack when it falls, it will cause the other rack to fall. Safety rules require that at least some of the racks should remain standing if one of the ends falls toward the others.

  Your task is to determine whether either or both ends will cause all racks to fall should one be tipped. To determine if a rack will knock over another rack, use the following two rules*:

  left rack falls if: position[i] + height[i] >= position[i_to_test]
  right rack falls if: position[i] - height[i] <= position[i_to_test]
  *Assume the position of a rack is position[i] and its height is height[i].

  The test is based on a single event. In other words, if it takes toppling both the left and right ends to knock down all the servers, you still pass the safety inspection.

  Complete the function checkAll, which takes the positions and heights of the server racks as input, and return a string ['RIGHT','LEFT','BOTH','NONE']  representing which of the ends is unsafe.

  If the racks fall over no matter from which end it gets triggered, then return BOTH. If the racks fall over due to rack at leftmost or rightmost, then return LEFT or RIGHT respectively. If neither end toppling will cause all the racks to fall over, return NONE.
  --hackerrank
*/

  console.log("---------UNSAFE RACK END ------------");
  function checkAll(n,height,position){
    if(n==0){
      return 'NONE';
    }else if(n==1){
      if(height[0]==0){
        return 'NONE';
      }else{
        return 'BOTH'
      }
    }
    let maxFallValue = Number.MAX_VALUE;
    let leftWillFall=false;
    let rightWillFall=false;

    for(let i=n-2;i>=0;i--){

      //current position does not topple condition
      if(position[i] < position[i+1] - height[i+1] && position[i] < maxFallValue){
        leftWillFall = false;
        break;
      }else{
        maxFallValue = Math.min(maxFallValue, position[i+1] - height[i+1]);
        console.log(position[i+1] - height[i+1]);
        if(maxFallValue<=position[0]){
          leftWillFall = true;
          break;
        }
      }
    }

    maxFallValue = Number.MIN_VALUE;
    for(let i=1;i<n;i++){
      //current position does not topple condition
      if(position[i] > height[i-1]+position[i-1] && position[i] > maxFallValue){
        rightWillFall = false;
        break;
      }else{
        maxFallValue = Math.max(maxFallValue,height[i-1] + position[i-1]);
        if(maxFallValue>=position[n-1]){
          rightWillFall = true;
          break;
        }
      }

    }
    if(leftWillFall && rightWillFall)
      return 'BOTH';
    else if(leftWillFall)
      return 'LEFT';
    else if(rightWillFall)
      return 'RIGHT';

    return 'NONE';

  }
  let heights = [1,2,0];
  let positions = [1,2,3];
  console.log("Heights: "+heights);
  console.log("Positions: "+positions);
  console.log("Unsafe end: "+checkAll(heights.length,heights,positions));

})();
