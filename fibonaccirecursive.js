// function fibonacci(num) {
//     if (num <= 1) return 1;
  
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }

//   console.log(fibonacci(6)); 

function fibonacciIterative(n){
  let fib;
  let result;
     if(n == 0) {
         result = Number(0);
        return result;
     } else if(n == 1) {
         result = Number(1);
       return result;
     } else {
        fib = (Number(fibonacciIterative(n-1)) + Number(fibonacciIterative(n-2)));
        result = Number(fib);
        return result;
     }
  }
  console.log(fibonacciIterative(2));
