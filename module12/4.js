

function arrayFilter (arr, callback ) {
    let result = [];
    for (let i= 0; i<arr.length; i++){
result.push(callback(arr[i]));
    }
    return result;
}
function squared (num) {
    return num*num;
}

let arr = [1,2,5,85];
const res = arrayFilter(arr, squared);
console.log(res);
