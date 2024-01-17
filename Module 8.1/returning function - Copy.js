
function createMultiplier() {
    return function(x) {
      return x*5 ;
    };
  }
  
  const multipl  = createMultiplier();

  
  console.log(multipl(3)); 
  console.log(multipl(8))
  
    