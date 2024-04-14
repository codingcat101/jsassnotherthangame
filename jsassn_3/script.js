fetch("https://reqres.in/api/users")
  .then((response) => {
    return response.json(); // Convert response to JSON
  })
  .then((objectData) => {
    console.log(objectData.data[0].id); // Access data array

    let tableData = "";
    objectData.data.forEach((values) => {
      tableData += ` <tr>
        <td>${values.id}</td>
        <td>${values.email}</td>
        <td>${values.first_name}</td>
        <td>${values.last_name}</td>
        <td><img src="${values.avatar}"/></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });

