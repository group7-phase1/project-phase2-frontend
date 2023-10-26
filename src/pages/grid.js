// grid.js

// Function to fetch data and display it in the grid
function fetchDataAndDisplayGrid() {
    fetch("/get-data.php") // This is the server-side script to retrieve data
        .then(response => response.json())
        .then(data => {
            // Assuming data is an array of objects, you can create an HTML table to display the data.
            const table = document.createElement("table");
            const thead = document.createElement("thead");
            const tbody = document.createElement("tbody");

            // Create table header row
            const headerRow = document.createElement("tr");
            for (const key in data[0]) {
                const th = document.createElement("th");
                th.textContent = key;
                headerRow.appendChild(th);
            }
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Create table data rows
            data.forEach(item => {
                const row = document.createElement("tr");
                for (const key in item) {
                    const cell = document.createElement("td");
                    cell.textContent = item[key];
                    row.appendChild(cell);
                }
                tbody.appendChild(row);
            });
            table.appendChild(tbody);

            // Display the table in the data grid container
            document.getElementById("data-grid").appendChild(table);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Call the function to fetch and display data when the page loads
document.addEventListener("DOMContentLoaded", fetchDataAndDisplayGrid);
