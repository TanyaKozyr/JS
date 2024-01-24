const vehicle = {
    make: "Toyota",
    model: "Sienna",
    year: 2020
}
 
const engine = {
    horsepower: 245,
    fuelType: "gas"
}
const completeVehicle = Object.assign({}, vehicle, engine);

console.log(completeVehicle)