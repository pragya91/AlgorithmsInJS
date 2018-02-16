(function(){

  /*Given an image represented by NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
  */
  let N = 5;
  let matrix = [
    ['\u20B7','\u20A9','\u20A9','\u20A9','\u20B7'],
    ['\u20B7','\u20A9','\u20B7','\u20B7','\u20B7'],
    ['\u20B7','\u20A9','\u20B7','\u20B7','\u20B7'],
    ['\u20B7','\u20A9','\u20B7','\u20B7','\u20B7'],
    ['\u20A9','\u20A9','\u20A9','\u20A9','\u20B7']
  ];

  //transpose and then reverse the columns sequence
  console.log("------Rotate matrix---------");
  function rotateMatrix(matrix,N){
    for(let i=0;i<N;i++){
      for(let j=i;j<N;j++){
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
    for(let i=0;i<N;i++){
       for(let j=0;j<N/2;j++){
         let temp = matrix[i][j];
         matrix[i][j] = matrix[i][N-j-1];
         matrix[i][N-j-1] = temp;
       }
    }
    console.log(matrix);
  }
  rotateMatrix(matrix,matrix.length);

  let matrix2 = [
    ['\u20B7','\u20A9','\u20A9','\u20A9','\u20B7'],
    ['\u20B7','\u20A9','\u20B7','\u20B7','\u20B7'],
    ['\u20B7','\u20A9','\u20B7','\u20B7','\u20B7'],
    ['\u20B7','\u20A9','\u20B7','\u20B7','\u20B7'],
    ['\u20A9','\u20A9','\u20A9','\u20A9','\u20B7']
  ];
  //rotate outermost edge from all directions, moving inwards
  console.log("------Rotate matrix---------");
  function rotateMatrix2(matrix,N){
    for(let layer=0;layer<N/2;layer++){
      let first = layer;
      let last = N-layer-1;

      for(j=first;j<last;j++){
        let offset = j-first;
        let temp = matrix[first][j];
        matrix[first][j] = matrix[last-offset][first];
        matrix[last-offset][first] = matrix[last][last-offset];
        matrix[last][last-offset] = matrix[j][last];
        matrix[j][last] = temp;
      }
    }
    console.log(matrix);
  }
  rotateMatrix2(matrix2,matrix2.length);


})();
