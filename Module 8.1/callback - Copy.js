function calculate (x,y,z){
    console.log(x,y,z)
}
 
function add (x, y){
    const result = x + y
    return result

}
function subtr (x,y){
    const result = x - y
    return result
}

function multipl (x,y){
    const result = x*y
    return result
}
function divis (x,y){
    const result = x/y
    return result
}



calculate(8,4,add(8,4))
calculate(8,4,subtr(8,4))
calculate(8,4,multipl(8,4))
calculate(8,4,divis(8,4))