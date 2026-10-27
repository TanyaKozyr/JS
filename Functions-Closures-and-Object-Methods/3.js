const user = {
    age: 19,
    password: '1q2w3e4r',
    agreement: true,
}
function checkAge (user){
    return user.age >=18;
}
function checkPass (user){
    return user.password.length >= 8;
}
function checkAgree (user){
    return user.agreement === true;
}

function valid(obj, ...args) {
    for (let i = 0; i<args.length; i++){
        if (args[i](obj) === false)
        return false
    }
    return true
}


console.log(valid(user,checkPass,checkAge,checkAgree));

function createValid(...args) {
    return function (obj) {
        for (let i = 0; i<args.length; i++){
            if (args[i](obj) === false)
            return false
        }
        return true
        
    }
}
const valid1 = createValid(checkAge,checkAgree);

console.log(valid1(user));