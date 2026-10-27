const arr = ["name1", "name2", "name3"];

for (const item of arr) console.log("Hi!", item);

for (const [i, el] of arr.entries()) {
  console.log(`${i + 1}:${el}`);
};
