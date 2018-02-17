(function(){
  /*
  Your final exam is approaching and you haven't begun to study. In order to have the best chance of passing the course, you resolve to study from now until exam time. Chapters vary in length, but not in value towards a passing grade, so you want to study as many complete chapters as possible. The order of chapters doesn't matter, but you must complete a chapter before it will help your grade.

  Your task is to maximize the number of complete chapters you can study between now and exam time.
  */
  console.log("-------Find max chapter that you can suty in exam rush------");
  let compareNumbers = function(a, b) {
    return a - b;
  }
  function findMaxChapters(tm, t){
    tm = tm.sort(compareNumbers);
    console.log(tm);
    let sum = 0,count=0;
    while(sum<t && count<tm.length){
      sum=sum+tm[count];
      count++;
    }
    if(sum > t){
      sum = sum-tm[count-1];
      count = count-1;
    }
    console.log("sum: "+sum);
    return count;
  }
  console.log(findMaxChapters([10,12,13,14],10));
})();
