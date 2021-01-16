
function firstRecurringCharacter(arr) {

    let hashTable = [];
    let firstRecurring;
  
    for (let i = 0; i < arr.length; i++) {
  
      if (hashTable[arr[i]]){
        firstRecurring = arr[i];
        break;
      } else {
        hashTable[arr[i]] = true;
      }
    }
    return firstRecurring;
  }
  
  let testArray = [2,5,1,2,3,5,1,2,4];
  console.log(firstRecurringCharacter(testArray));