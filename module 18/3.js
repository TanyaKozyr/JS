let dataProm = fetch("https://jsonplaceholder.typicode.cm/todos");
dataProm
  .then((data) => data.json())
  .then((list) => console.log(list))
  .catch((err) => console.log("O_ops", err))
  .then(console.log("Privet!"));
