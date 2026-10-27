let num = 0;

function calculateFactorial (){
   num++;
   console.log(num);
 
   if (num === 10) return;
   calculateFactorial(); 
}


let num1 = 0;
let num2 = ' ';

function calculateFactorial1 (){
   num1++;
   num2 += num1 + ' '
  
   if (num1 >= 10) return;
   calculateFactorial1(); 
}
calculateFactorial();
calculateFactorial1();
console.log(num2)

