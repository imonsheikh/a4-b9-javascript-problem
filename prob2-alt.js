function checkName(name) {
    // validation 
    if(typeof name !== 'string'){
     return 'Invalid'
    }

   let lastLetter = name.slice(-1).toLowerCase();
    // array 
   let checkArray = ["a", "y", "i", "o", "u", "w", "e"];

   let result = checkArray.includes(lastLetter)

   return result? "Good Name" : "Bad Name"
 }
 
 console.log(checkName("salman"));
 console.log(checkName("RAFEE"));
 console.log(checkName("Jhankar"));
 console.log(checkName(199));
 console.log(checkName(["Rashed"]));
 