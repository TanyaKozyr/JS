const obj = {
  item1: {
    name: "item1",
    price: 5,
  },
  item2: {
    name: "item2",
    price: 2,
  },
  item3: {
    name: "item3",
    price: 3,
  },
  item4: {
    name: "item4",
    price: 4,
  },
};

let total = 0;
for (const item of Object.values(obj)) {
    total += item?.price ?? 0 ;

}
    console.log(total,'👈');

 