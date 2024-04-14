document.addEventListener("DOMContentLoaded", () => {
    fetchUserData(1); // Fetch data from page 1 initially
});

document.getElementById("loadSecondPage").addEventListener("click", () => {
    fetchUserData(2); // Fetch data from page 2 when the button is clicked
});

// Function to fetch user data from a specific page
function fetchUserData(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then((response) => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Convert response to JSON
        })
        .then((objectData) => {
            console.log(objectData.data[0].id); // Access data array

            let tableData = "";
            objectData.data.forEach((values) => {
                tableData += ` <tr>
                    <td>${values.id}</td>
                    <td>${values.email}</td>
                    <td>${values.first_name} ${values.last_name}</td>
                    <td><img src="${values.avatar}" alt="Avatar"/></td>
                </tr>`;
            });
            document.getElementById("table_body").innerHTML = tableData;
        })
        .catch((err) => {
            console.log(err);
        });
}
