const globalVar = "I'm a string"
function printGlobalVar (){
    console.log(globalVar)
}
printGlobalVar();

function modifyGlobalVar(){
    const globalVar = "I'm not a string"
    console.log(globalVar)
}
modifyGlobalVar()