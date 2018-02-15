(function(){


  /*Given an n x n matrix and a number x, find position of x in the matrix if it is present in it. Else print “Not Found”. In the given matrix, every row and column is sorted in increasing order. The designed algorithm should have linear time complexity.*/

  console.log("----------Search element in a sorted matrix----------");
  function searchInMatrix(matrix, element){
    let n = matrix.length;
    let i=0,j=n-1;

    while(i!=n && j!=-1){
      if(matrix[i][j] < element){
        i=i+1;
      }else if(matrix[i][j] > element){
        j=j-1;
      }else{
        console.log("Position: i:"+i+", j:"+j);
        break;
      }
    }
    console.log("Position not found");

  }
  searchInMatrix([[10, 20, 30, 40],
                  [15, 25, 35, 45],
                  [27, 29, 37, 48],
                  [32, 33, 39, 50]], 50);
})();
