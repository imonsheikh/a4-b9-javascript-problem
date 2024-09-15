function calculateMoney(ticketSale){

    if(ticketSale < 0 || typeof ticketSale !== "number"){
      return 'Invalid Number'
    }

    let remainingAmount = ticketSale * 120 - (500 + (8 * 50))


    return remainingAmount;
}


//test problem
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney(""));
console.log(calculateMoney([]));
console.log(calculateMoney({}));
console.log(calculateMoney());
