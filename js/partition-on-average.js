(function(){

  /*Given an array of integers, partition the array into two parts such that the two parts hold same average. */

  console.log("------------partition the array such that the average both sides is same---------");
  function findPartition(input){

    let leftSum = 0;
    let totalSum = 0;
    let i=0,j=0;
    let n=input.length;

    for(i=0;i<n;i++){
      totalSum+=input[i];
    }
    for(j=0;j<n-1;j++){
      leftSum = leftSum + input[j];
      let rightSum = totalSum - leftSum;
      if((leftSum/(j+1)) == (rightSum/(n-j-1))){
        break;
      }
    }
    if(j!=n-1){
      console.log("Partition at: "+j+"th position");
      console.log("Partition average: "+ (leftSum/(j+1)));
    }else{
      console.log("No partition exists");
    }

  }
  findPartition([1,2,3,1,1,2,3,1]);
})();
