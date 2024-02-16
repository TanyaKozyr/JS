 function create (name, age, country){
    return { name, age, country}

}

const per1 = create('Tom', 35, 'USA');
const per2 = { ...per1 };


console.log(per1); 
console.log(per2); 