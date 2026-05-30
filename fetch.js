fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (var x in data) {
      document.write(`${data[x].name} - ${data[x].email} - ${data[x].email}<br>`);
    }
  })
  .catch((error) => response.write("Can't fetch data"));