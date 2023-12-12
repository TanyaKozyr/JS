//let year, birthYear;
year = 2013;
birthYear = 2000;

if (year - birthYear >= 18) {
    console.log('You are an adult');
} else if (year - birthYear >= 13 && year - birthYear < 18) {
    console.log('You are a teenager');
} else if (year - birthYear < 13) {
    console.log('You are a child');
}

let year, birthYear
year = 2013
birthYear = 2000
 // the [] is wrong, and not needed here , please take a look at the code above, it is just regular math operations
if ([year - birthYear] >= 18) {
    console.log('You are an adult'); 
}
else if ([year - birthYear] >= 13 && [year - birthYear] < 18) {
    console.log('You are a teenager');
}
else if ([year - birthYear] < 13 ) {
    console.log('You are a child');
}
