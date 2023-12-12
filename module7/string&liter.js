
// PLease do not use & in file names, file names best practices are stringLiteral.js or string_literal.js
//same here, better approach will be function 

let firstName, lastName, age;
firstName = "Tatiana";
lastName = "Kozyreva";
birthYear = 1987
year = 2023
const prinPersonInfo = ({name,lastName, birthYear, year })=>{
const stringToPrint  = `My name is ${firstName} ${lastName} and I'm ${year - birthYear} years old`;
 return stringToPrint
}
const result = prinPersonInfo({name: firstName, lastName:lastName,birthYear:birthYear, year:year });
console.log(result);
// or console.log(prinPersonInfo({name: firstName, lastName:lastName,birthYear:birthYear, year:year }))
