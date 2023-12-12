
let studentName, age, isStudent // this way you need to declare the isStudent variable, however in this case 
// const makes more sense. cause values are not being updated
// so you can do it this way 
const studentName = "Tanya Kozyreva";
const age = '35';
const isStudent = true;


//this way you can define a function, that will print, Tanya is student true, if isStudent is true, or will print ,  Tanya is student false if not
const checkIsStudent = (someParamIsStudent, studentName)=>{
        console.log(studentName, `"is Student" ${someParamIsStudent}`);
}
//call he function
checkIsStudent(isStudent, studentName);

// * I couldn’t apply the path with “true” and “false” because it’s not clear how to use them with these values
