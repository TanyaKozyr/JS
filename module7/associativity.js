let text

text = `Hello, my name is Tanya. 
I am 36 years old and I am from Russia. 
I have been living in America for 6 years and
dreaming of becoming a developer. I have a family - 
my husband, son and cat.`

// let firstSentence = text.split('.') // Why this one is commented out ???
// can also be done this way 
let firstSentence = text.split('.')?.[0]; // here we know that array will be returned, so we grab the first element from that array after split()
// console.log(firstSentence[0])

let target = "I"
let pos = -1;
let count = 0

while ((pos = text.indexOf(target, pos + 1)) !== -1) {
 count++ ;
}
console.log(`Word "I" appears ${count} times in this text`)


// the idea is great, same you can use function 
//just put the while in there, and rturn count
