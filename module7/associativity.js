let text

text = `Hello, my name is Tanya. 
I am 36 years old and I am from Russia. 
I have been living in America for 6 years and
dreaming of becoming a developer. I have a family - 
my husband, son and cat.`

// let firstSentence = text.split('.')
// console.log(firstSentence[0])

let target = "I"
let pos = -1;
let count = 0

while ((pos = text.indexOf(target, pos + 1)) !== -1) {
 count++ ;
}
console.log(`Word "I" appears ${count} times in this text`)