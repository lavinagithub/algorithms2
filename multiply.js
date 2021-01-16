const multiplicationTable = function(num){
    let returnArray = [];
    let val;
    for(let i=1; i<=num; i++){
       
    
    //console.log(`i ${i}`);
      returnArray[i]=[];
       val = "";
       
      for (let j=1; j<=num; j++){
       returnArray[i].push(i*j);
       }
      }
    returnArray.shift();
    return returnArray;
}

 console.log(multiplicationTable(3));
  