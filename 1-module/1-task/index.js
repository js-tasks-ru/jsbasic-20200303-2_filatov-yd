/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
/*
let i=1
function factorial(n) {
    while(n>1){
        i*=n;
        n--;
        
    }
    return i;
  
}
factorial(5)
alert(i);*/
function factorial(n) {
    let result=1;
    let count;
    for (count=n;count>1;count--){
        result*=count;
    }
return result

}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));