/*
recursive fibonacci function

factorial(7) --> 0,  1, 0+1, 1+1, 1+2, 2+3, 3+5, 5+8
                 0   1   1    2    3    5    8   13--> output = 13
*/

function fib(number){
  if (number < 3) {
    return 1 
  }
  
 return fib(number-2)+fib(number-1)
}

// driver code
console.log(fib(7));
