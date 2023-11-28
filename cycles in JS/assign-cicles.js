

const emp1 = {
    name: "John",
    last_name: "Wick",
    age: "35",
    companies: ["Microsoft", "Google", "Amazon", "IPAM"]

}
const emp2 = {
    name: "David",
    last_name: "Bowie",
    age: "43",
    companies: ["Microsoft", "Meta", "Sony", "Sega",  "Nintendo"]


    
}


    if (emp1.companies.length > emp2.companies.length) {
        console.log (emp1.name, emp1.last_name)
        
    }
    else if (emp2.companies.length > emp1.companies.length) {
        console.log (emp2.name, emp2.last_name)
    } 
    else {
        console.log(emp1.name, emp1.last_name, ",", emp2.name, emp2.last_name );
    }


// for (let index = 0; index < emp1.companies.length; index++) {
//     console.log(emp1.companies[index]);
//     console.log(emp2.companies[index]);
// }





