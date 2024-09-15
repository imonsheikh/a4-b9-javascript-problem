function password(obj) {
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "Invalid";
  }

  let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);

  let passwordString = capitalSiteName + "#" + obj.name + "@" + obj.birthYear;

  return passwordString;
}

// test
console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));

console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));

// // console.log(122.length); //error
// let birthYear = 5245
// console.log(birthYear.length);// undefined

// console.log(birthYear.toString().length === 4);// 4
