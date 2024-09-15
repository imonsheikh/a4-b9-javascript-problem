function monthlySavings(arr, livingCost){
//   validation 
if(!Array.isArray(arr) || typeof livingCost !== "number"){

    return "Invalid Input"
}

// calculate Total income 
let totalIncome = 0;
for(let payment of arr){
    
    if(payment >= 3000){
        //deduct tax ammount
        let tax = payment * 0.20
        totalIncome += payment - tax
    }else{

        totalIncome = totalIncome + payment;
    }
}

let savings = totalIncome - livingCost

if(savings >= 0){
    return savings
}else{
    return "earn more"
}

// alt ternary 
// return savings >=0? savings: "earn more"

}


// test 
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings([ 900 , 2700 , 3400] , NaN));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
console.log(monthlySavings(100, [ 900 , 2700 , NaN]));
console.log(monthlySavings(NaN, [ 900 , 2700 , NaN]));




