
function reverse(str){
    let stringArray = str.split("");
    let newStringArray = [];
  
    let length = stringArray.length;
  
    for (let i = 0; i < length; i++) {
      newStringArray.push(stringArray.pop());
    }
  
    let newString = newStringArray.join("");
  
    return newString;
  }
  console.log(reverse("Hello World"));