const arr = ['Alice','Bob','Jerk','Genius'];

console.log('------ForEach--------');

arr.forEach((person)=>{console.log('Hi,',person,'!');});

console.log('------FofOf--------');

for (const person of arr) {
    console.log('Hi',person,'!');
}