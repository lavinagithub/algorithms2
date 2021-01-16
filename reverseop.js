function solve(eq){
    //..
let stringArray = eq.split(/[.\-+*/]/);
   console.log(stringArray);
  let newStringArray = [];
  let length = stringArray.length;

  
    for (let i = length-1; i >= 0; i--) {
        console.log(stringArray[i]);
      newStringArray.push(stringArray[i]);
    }
  
    let newString = newStringArray.join("");
  
    return newString;
  }
//  solve("100*b/y");
//console.log(solve("100*b/y"));

console.log(md5("pass"));