
let year, birthYear
year = 2013
birthYear = 2000

if ([year - birthYear] >= 18) {
    console.log('You are an adult'); 
}
else if ([year - birthYear] >= 13 && [year - birthYear] < 18) {
    console.log('You are a teenager');
}
else if ([year - birthYear] < 13 ) {
    console.log('You are a child');
}