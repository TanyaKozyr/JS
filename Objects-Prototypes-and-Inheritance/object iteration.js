const inventory = {
    item1: {
        name: "item 1",
        price: 50,
        quantity: 3,
    },
    item2: {
        name: "item 2",
        price: 25,
        quantity: 8,

    },
    item3: {
        name: "item 3",
        price: 10,
        quantity: 5,
    },
    item4: {
        name: "item 4",
        price: 80,
        quantity: 2,
    }

}
let totalValue = 0;

for (let key in inventory) {
  
    let item = inventory[key];
    totalValue += item.price * item.quantity;
  }



console.log("Total value of inventory: $" + totalValue);
