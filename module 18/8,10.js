const button = document.createElement("button");
button.innerHTML = "Load data";
document.body.appendChild(button);

let list = [];
const getdata = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  list = data;
  return data;
};

const createTable = () => {
  getdata().then(() => {
    const $target = document.getElementById("result");
    const $table = document.createElement("table");
    const $tbody = document.createElement("tbody");

    const $thead = document.createElement("thead");
    const $tr = document.createElement("tr");
    Object.keys(list[0]).forEach((key) => {
      const $th = document.createElement("th");
      $th.innerText = key;
      $tr.appendChild($th);
    });
    $thead.appendChild($tr);
    $table.appendChild($thead);

    list.forEach((rowData) => {
      const $row = document.createElement("tr");
      Object.values(rowData).forEach((value) => {
        const $td = document.createElement("td");
        $td.innerText = value;
        $row.appendChild($td);
      });
      $tbody.appendChild($row);
    });
    $table.appendChild($tbody);

    $target.innerHTML = "";
    $target.appendChild($table);
  });
};
button.addEventListener("click", createTable);
