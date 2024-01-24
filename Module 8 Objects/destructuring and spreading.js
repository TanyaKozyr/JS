const person = {
    namePerson: 'Tom Ford',
    age: 35,
    address: 'Seattle'
};
const addingInfo = {
hobby: 'Skiing',
profession: 'Developer'
};
const {namePerson, age, address} = person;
const {hobby, profession} = addingInfo;
const infoPerson = {...person, ...addingInfo};


console.log(namePerson, '-', profession,',', address);
console.log(infoPerson)