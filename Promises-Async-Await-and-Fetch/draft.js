console.log('Im started');

const url = 'https://api.mockaroo.com/api/4f461b90?count=1000&key=d6763f40';
let j = [];

let currencyExchange = {
  'USD': 1,
  'EUR': 0.0000001,
  'KRW': 0.000001,
  'JPY': 0.0000001,
  'MXN': 0.0000001
}

// get data from server
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  j = data;

  return data;
};


let accountTypes = {};

function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        1: 'admin',
        2: 'user',
        3: 'guest'
      });
    }, 3000);
  });
}

// Usage
delayedPromise().then((result) => {
  accountTypes = result;
  console.log(result);
});

const exchangeURL = 'https://exchange-rate-api1.p.rapidapi.com/latest?base=USD';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b1c54f17b8msh682154962ddd781p192188jsn6d25978328e6',
    'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
  }
};


const getExchangeRate = async () => {
  try {
    const response = await fetch(exchangeURL, options);
    const result = await response.json();
    console.log(result);
    currencyExchange = result.rates;
  } catch (error) {
    console.error(error);
  }
}


let locale = 'en-US';

const currencies = {
  'en-US': 'USD',
  'es-MX': 'MXN',
  'fr': 'EUR',
  'de': 'EUR',
  'ko': 'KRW',
  'ja': 'JPY'
}

function filterTable(e) {
  const target = e.target;
  const {value} = target;

  const filtered = j.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  renderTable(filtered);

  console.log('target', target.value);
}

const addFilterEvent = () => {
  document.getElementById('search').addEventListener('keyup', filterTable);
}

const addLangSwitcher = () => {
  const $el  = document.getElementById('lang');
  $el.addEventListener('change', (e) => {
    const v = e.currentTarget.value;

    locale = v;

    renderTable();
  })
}


let sortedInverse = false;
const sortByName = () => {
  const sortd = j.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });

  if (sortedInverse) {
    sortd.reverse();
  }

  sortedInverse = !sortedInverse;

  renderTable(sortd)
}


const renderRow = (row) => {
  const $row = document.createElement('tr');

  Object.keys(row).forEach(key => {
    const $td = document.createElement('td');
    if (key === 'dob') {
      const date = new Date(row[key]);

      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();

      $td.innerText = `${new Intl.DateTimeFormat(locale, {dateStyle: 'full'}).format(date)} // ${date.toLocaleDateString()}`;
    } else if (key === 'balance') {
      const currency = currencies[locale] || 'USD';
      const number = row[key] * currencyExchange[currency];

      $td.innerText = `${new Intl.NumberFormat(locale, {style: 'currency', currency}).format(number)}`
    } else if (key === 'account') {
      $td.innerText = accountTypes[row[key]];
    } else {
      $td.innerText = row[key];
    }

    $row.appendChild($td);
  });

  return $row;
}

const renderTable = (dataForRender) => {
  const list = dataForRender || j;

  const $target = document.getElementById('result');
  const $table = document.createElement('table');
  const $tbody = document.createElement('tbody');

  const $thead = document.createElement('thead');
  const $tr = document.createElement('tr');


  Object.keys(j[0]).forEach(key => {
    const $th = document.createElement('th');
    $th.innerText = key.toUpperCase();

    if (key === 'name') {
      $th.addEventListener('click', sortByName);
    }

    $tr.appendChild($th);
  });

  $thead.appendChild($tr);
  $table.appendChild($thead);


  list.forEach(row => {
    $tbody.appendChild(renderRow(row));
  });
  $table.appendChild($tbody);


  $table.classList.add('table', 'w-100', 'table-hover');

  $target.innerHTML = '';
  $target.appendChild($table);
}

document.addEventListener('DOMContentLoaded', () => {
  // addFilterEvent();
  // renderTable();
  addLangSwitcher();

  const promises = [getData(), getExchangeRate(), delayedPromise()];

  Promise.all(promises).then(() => {
    renderTable();
  });
});