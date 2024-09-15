function deleteInvalids(array){
    // validation1 
    // if(!Array.isArray(array)){
    //     return 'Invalid Array'
    // }

    //  validation 2 
    if(Array.isArray(array) === false){
        return 'Invalid Array'
    }

    let numberArray = []

    for(let element of array){
        // console.log(typeof element);
        if(typeof element === 'number' && isNaN(element) === false){
            // console.log(element);
            // console.log(typeof element);
              numberArray.push(element)        
        }
    }

    return numberArray
}

// test prob 3 
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));




// console.log(typeof NaN);// number
// console.log(isNaN(NaN));//true
// console.log(isNaN("2"));//false
