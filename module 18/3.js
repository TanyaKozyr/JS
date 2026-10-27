let dataProm = fetch("https://jsonplaceholder.typicode.com/todos");
dataProm
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((list) => console.log(list))
  .catch((err) => console.log("O_ops", err))
  .then(() => console.log("Privet!"));
