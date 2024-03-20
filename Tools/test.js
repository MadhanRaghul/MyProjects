document.addEventListener('DOMContentLoaded', function() {
    var tableData = [
        {
          "Rank": 1,
          "Brand": "Bugatti",
          "Car Name": "Chiron Super Sport 300+",
          "Country": "France",
          "Year": 2019,
          "Top Speed (mph)": 304,
          "Horsepower (hp)": 1578,
          "0-60 mph (seconds)": 2.3
        },
        {
          "Rank": 2,
          "Brand": "SSC",
          "Car Name": "Tuatara",
          "Country": "United States",
          "Year": 2020,
          "Top Speed (mph)": 331,
          "Horsepower (hp)": 1750,
          "0-60 mph (seconds)": "< 2.5"
        },
        // Add more data objects as needed
    ];

    var tableBody = document.getElementById('table-body');
    
    tableData.forEach(function(item) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.Rank}</td>
            <td>${item.Brand}</td>
            <td>${item["Car Name"]}</td>
            <td>${item.Country}</td>
            <td>${item.Year}</td>
            <td>${item["Top Speed (mph)"]}</td>
            <td>${item["Horsepower (hp)"]}</td>
            <td>${item["0-60 mph (seconds)"]}</td>
        `;
        tableBody.appendChild(row);
    });
});
