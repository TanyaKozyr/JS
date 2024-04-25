let getCoffee = new Promise((resolve) => {
  fetch("https://api.sampleapis.com/coffee/hot").then((data) =>
    resolve(data.json())
  );
});

let user = new Promise((resolve) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
    resolve(data.json())
  );
});

let y = new Promise((resolve) => {
  setTimeout(() => {
  resolve("Long server response");
  }, 3000);
});

Promise.all([y, getCoffee, user]).then((data) => console.log(data));
