function checkName(name) {

   if(typeof name !== 'string'){
    return 'Invalid'
   }

  let lastLetter = name.slice(-1).toLowerCase();
  // let lastLetter2 = name[1]
  // let lastLetter3 = name[name.length - 1]

  // console.log(lastLetter); //n
  // console.log(lastLetter2);//a
  // console.log(lastLetter3);//n

  let result = false;
  let checkArray = ["a", "y", "i", "o", "u", "w", "e"];

  for (let char of checkArray) {
    // console.log(char);
    if (char === lastLetter) {
      result = true;
    }
  }

  return result? "Good Name" : "Bad Name"


}

console.log(checkName("salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
