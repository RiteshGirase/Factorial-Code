// Lets do a Factorial Program------------------------------------


function Factorial(number){

let fact = 1;
for (let index = 1; index <=number; index++) { 
    fact = fact * index;
}
return fact;

}

let result1 = Factorial(7);
console.log(result1);


// second method------------------------------------------------------------


function Facto(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr);
    let c = arr.slice(1,).reduce((a,b)=>a*b)
    return c
}

let result2 = Facto(7);
console.log(result2);
