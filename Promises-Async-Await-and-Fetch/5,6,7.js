async function getCoffee(res) {
  try {
    let someData = await fetch("https://api.sampleapis.com/coffee/hot");
    let data = await someData.json();
    let coffee = data.find((item) => item.title === res);
    console.log(coffee);
  } catch (e) {
    console.log(e);
  }
}

getCoffee("Cappuccino");
