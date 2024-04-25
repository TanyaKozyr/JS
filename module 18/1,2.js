let p = new Promise(function (resolve, reject) {
  setTimeout(resolve, 3000);
});
console.log(p);
p.then(() => {
  console.log(p);
})

  .then(() => {
    console.log("Greeting message");
    return new Promise((resolve) => setTimeout(resolve, 2000));
  })
  .then(() => {
    console.log("Hi everyone!");
  });
