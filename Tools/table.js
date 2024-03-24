document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('table-body')
    const btnFast = document.getElementById('btn-fast')
    const btnCost = document.getElementById('btn-cost')
    const btnSafe = document.getElementById('btn-safe')
    const btnGas = document.getElementById('btn-gas')
    const btnUsa = document.getElementById('btn-usa')
    const btnInd = document.getElementById('btn-ind')
    const btnGerm = document.getElementById('btn-germ')
    const btnJap = document.getElementById('btn-jap')
    const btnUk = document.getElementById('btn-uk')
    const btnItaly = document.getElementById('btn-italy')
    const btnSwed = document.getElementById('btn-swed')
    const btnHp = document.getElementById('btn-hp')
    const btnSixty = document.getElementById('btn-sixty')
    const btnElect = document.getElementById('btn-elect')
    const btnTruck = document.getElementById('btn-truck')

    const initialData = [
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
        {
          "Rank": 3,
          "Brand": "Koenigsegg",
          "Car Name": "Jesko Absolut",
          "Country": "Sweden",
          "Year": 2020,
          "Top Speed (mph)": ">330",
          "Horsepower (hp)": 1600,
          "0-60 mph (seconds)": "-"
        },
        {
          "Rank": 4,
          "Brand": "Hennessey",
          "Car Name": "Venom F5",
          "Country": "United States",
          "Year": 2022,
          "Top Speed (mph)": 311,
          "Horsepower (hp)": 1817,
          "0-60 mph (seconds)": "< 2.6"
        },
        {
          "Rank": 5,
          "Brand": "Bugatti",
          "Car Name": "Veyron Super Sport 16.4",
          "Country": "France",
          "Year": 2010,
          "Top Speed (mph)": 268,
          "Horsepower (hp)": 1200,
          "0-60 mph (seconds)": 2.4
        }
      ]

    function generateTableRows(data) {
        let rows = ''

        data.forEach(function(item) {
            rows += `
                <tr>
                    <td>${item.Rank}</td>
                    <td>${item.Brand}</td>
                    <td>${item["Car Name"]}</td>
                    <td>${item.Country}</td>
                    <td>${item.Year}</td>
                    <td>${item["Top Speed (mph)"]}</td>
                    <td>${item["Horsepower (hp)"]}</td>
                    <td>${item["0-60 mph (seconds)"]}</td>
                </tr>
            `
        })

        return rows;
    }

    function showData(data) {
        tableBody.innerHTML = generateTableRows(data);
    }

    showData(initialData);

    // Fastest

    const tableData = [
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
        {
          "Rank": 3,
          "Brand": "Koenigsegg",
          "Car Name": "Jesko Absolut",
          "Country": "Sweden",
          "Year": 2020,
          "Top Speed (mph)": ">330",
          "Horsepower (hp)": 1600,
          "0-60 mph (seconds)": "-"
        },
        {
          "Rank": 4,
          "Brand": "Hennessey",
          "Car Name": "Venom F5",
          "Country": "United States",
          "Year": 2022,
          "Top Speed (mph)": 311,
          "Horsepower (hp)": 1817,
          "0-60 mph (seconds)": "< 2.6"
        },
        {
          "Rank": 5,
          "Brand": "Bugatti",
          "Car Name": "Veyron Super Sport 16.4",
          "Country": "France",
          "Year": 2010,
          "Top Speed (mph)": 268,
          "Horsepower (hp)": 1200,
          "0-60 mph (seconds)": 2.4
        }
      ]
      
      btnFast.addEventListener('click', function() {
        showData(tableData);
    });

    // Costliest

    const tableData2 = [
        {
          "Rank": 1,
          "Brand": "Bugatti",
          "Car Name": "La Voiture Noire",
          "Country": "France",
          "Year": "2019",
          "Top Speed (mph)": 261,
          "Horsepower (hp)": 1500,
          "0-60 mph (seconds)": 2.5
        },
        {
          "Rank": 2,
          "Brand": "Pagani",
          "Car Name": "Zonda HP Barchetta",
          "Country": "Italy",
          "Year": "2018",
          "Top Speed (mph)": 220,
          "Horsepower (hp)": 789,
          "0-60 mph (seconds)": 3.0
        },
        {
          "Rank": 3,
          "Brand": "Rolls-Royce",
          "Car Name": "Sweptail",
          "Country": "United Kingdom",
          "Year": "2017",
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 453,
          "0-60 mph (seconds)": 4.6
        },
        {
          "Rank": 4,
          "Brand": "Bugatti",
          "Car Name": "Centodieci",
          "Country": "France",
          "Year": "2020",
          "Top Speed (mph)": 236,
          "Horsepower (hp)": 1600,
          "0-60 mph (seconds)": 2.4
        },
        {
          "Rank": 5,
          "Brand": "Bugatti",
          "Car Name": "Divo",
          "Country": "France",
          "Year": "2019",
          "Top Speed (mph)": 236,
          "Horsepower (hp)": 1500,
          "0-60 mph (seconds)": 2.4
        }
      ]
      
    btnCost.addEventListener('click', function() {
        showData(tableData2);
    });

    // Safest

    const tableData3 = [
        {
          "Rank": 1,
          "Brand": "Volvo",
          "Car Name": "XC90",
          "Country": "Sweden",
          "Year": 2023,
          "Top Speed (mph)": 140,
          "Horsepower (hp)": 316,
          "0-60 mph (seconds)": 6.1
        },
        {
          "Rank": 2,
          "Brand": "Subaru",
          "Car Name": "Outback",
          "Country": "Japan",
          "Year": 2024,
          "Top Speed (mph)": 130,
          "Horsepower (hp)": 182,
          "0-60 mph (seconds)": 7.1
        },
        {
          "Rank": 3,
          "Brand": "Tesla",
          "Car Name": "Model 3",
          "Country": "United States",
          "Year": 2023,
          "Top Speed (mph)": 145,
          "Horsepower (hp)": 283,
          "0-60 mph (seconds)": 5.3
        },
        {
          "Rank": 4,
          "Brand": "Audi",
          "Car Name": "A6",
          "Country": "Germany",
          "Year": 2024,
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 335,
          "0-60 mph (seconds)": 5.1
        },
        {
          "Rank": 5,
          "Brand": "Toyota",
          "Car Name": "Camry",
          "Country": "Japan",
          "Year": 2023,
          "Top Speed (mph)": 135,
          "Horsepower (hp)": 203,
          "0-60 mph (seconds)": 7.4
        }
      ]
      
      btnSafe.addEventListener('click', function() {
        showData(tableData3)
    });

    // Gas Mileage

    const tableData4 = [
        {
          "Rank": 1,
          "Brand": "Toyota",
          "Car Name": "Prius",
          "Country": "Japan",
          "Year": 2023,
          "Top Speed (mph)": 110,
          "Horsepower (hp)": 121,
          "0-60 mph (seconds)": 10.5,
          "Mileage (mpg)": 58
        },
        {
          "Rank": 2,
          "Brand": "Honda",
          "Car Name": "Insight",
          "Country": "Japan",
          "Year": 2024,
          "Top Speed (mph)": 120,
          "Horsepower (hp)": 129,
          "0-60 mph (seconds)": 9.8,
          "Mileage (mpg)": 55
        },
        {
          "Rank": 3,
          "Brand": "Tesla",
          "Car Name": "Model S",
          "Country": "United States",
          "Year": 2023,
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 503,
          "0-60 mph (seconds)": 3.1,
          "Mileage (mpg equivalent)": 120
        },
        {
          "Rank": 4,
          "Brand": "Hyundai",
          "Car Name": "Ioniq",
          "Country": "South Korea",
          "Year": 2024,
          "Top Speed (mph)": 105,
          "Horsepower (hp)": 134,
          "0-60 mph (seconds)": 9.3,
          "Mileage (mpg)": 58
        },
        {
          "Rank": 5,
          "Brand": "Lexus",
          "Car Name": "UX Hybrid",
          "Country": "Japan",
          "Year": 2023,
          "Top Speed (mph)": 115,
          "Horsepower (hp)": 181,
          "0-60 mph (seconds)": 8.7,
          "Mileage (mpg)": 42
        }
      ]

      btnGas.addEventListener('click', function() {
        showData(tableData4)
    });

    // USA

    const tableData5 = [
        {
          "Rank": 1,
          "Brand": "Ford",
          "Car Name": "Mustang",
          "Country": "United States",
          "Year": 2024,
          "Top Speed (mph)": 180,
          "Horsepower (hp)": 450,
          "0-60 mph (seconds)": 4.0
        },
        {
          "Rank": 2,
          "Brand": "Chevrolet",
          "Car Name": "Corvette Stingray",
          "Country": "United States",
          "Year": 2023,
          "Top Speed (mph)": 194,
          "Horsepower (hp)": 495,
          "0-60 mph (seconds)": 2.9
        },
        {
          "Rank": 3,
          "Brand": "Dodge",
          "Car Name": "Challenger SRT Demon",
          "Country": "United States",
          "Year": 2022,
          "Top Speed (mph)": 168,
          "Horsepower (hp)": 808,
          "0-60 mph (seconds)": 2.3
        },
        {
          "Rank": 4,
          "Brand": "Jeep",
          "Car Name": "Grand Cherokee",
          "Country": "United States",
          "Year": 2023,
          "Top Speed (mph)": 120,
          "Horsepower (hp)": 293,
          "0-60 mph (seconds)": 6.3
        },
        {
          "Rank": 5,
          "Brand": "Tesla",
          "Car Name": "Model S",
          "Country": "United States",
          "Year": 2023,
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 503,
          "0-60 mph (seconds)": 3.1
        }
      ]      

      btnUsa.addEventListener('click', function() {
        showData(tableData5)
    });      

    // Indian

    const tableData6 = [
        {
          "Rank": 1,
          "Brand": "Tata",
          "Car Name": "Nexon EV",
          "Country": "India",
          "Year": 2022,
          "Top Speed (mph)": 85,
          "Horsepower (hp)": 127,
          "0-60 mph (seconds)": 9.9
        },
        {
          "Rank": 2,
          "Brand": "Mahindra",
          "Car Name": "XUV700",
          "Country": "India",
          "Year": 2023,
          "Top Speed (mph)": 130,
          "Horsepower (hp)": 197,
          "0-60 mph (seconds)": 8.5
        },
        {
          "Rank": 3,
          "Brand": "Maruti Suzuki",
          "Car Name": "Swift",
          "Country": "India",
          "Year": 2024,
          "Top Speed (mph)": 120,
          "Horsepower (hp)": 89,
          "0-60 mph (seconds)": 11.5
        },
        {
          "Rank": 4,
          "Brand": "Hyundai",
          "Car Name": "Creta",
          "Country": "India",
          "Year": 2023,
          "Top Speed (mph)": 115,
          "Horsepower (hp)": 113,
          "0-60 mph (seconds)": 10.2
        },
        {
          "Rank": 5,
          "Brand": "Kia",
          "Car Name": "Seltos",
          "Country": "India",
          "Year": 2023,
          "Top Speed (mph)": 120,
          "Horsepower (hp)": 138,
          "0-60 mph (seconds)": 9.8
        }
      ]

      btnInd.addEventListener('click', function() {
        showData(tableData6)
    });

    // Germany

    const tableData7 = [
        {
          "Rank": 1,
          "Brand": "Volkswagen",
          "Car Name": "Golf",
          "Country": "Germany",
          "Year": 2023,
          "Top Speed (mph)": 140,
          "Horsepower (hp)": 148,
          "0-60 mph (seconds)": 8.5
        },
        {
          "Rank": 2,
          "Brand": "Mercedes-Benz",
          "Car Name": "E-Class",
          "Country": "Germany",
          "Year": 2024,
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 362,
          "0-60 mph (seconds)": 4.9
        },
        {
          "Rank": 3,
          "Brand": "BMW",
          "Car Name": "3 Series",
          "Country": "Germany",
          "Year": 2023,
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 255,
          "0-60 mph (seconds)": 5.6
        },
        {
          "Rank": 4,
          "Brand": "Audi",
          "Car Name": "A4",
          "Country": "Germany",
          "Year": 2022,
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 201,
          "0-60 mph (seconds)": 7.1
        },
        {
          "Rank": 5,
          "Brand": "Porsche",
          "Car Name": "Cayenne",
          "Country": "Germany",
          "Year": 2023,
          "Top Speed (mph)": 177,
          "Horsepower (hp)": 335,
          "0-60 mph (seconds)": 5.6
        }
      ]

      btnGerm.addEventListener('click', function() {
        showData(tableData7)
    });

    // Japanese

    const tableData8 = [
        {
          "Rank": 1,
          "Brand": "Toyota",
          "Car Name": "Camry",
          "Country": "Japan",
          "Year": 2023,
          "Top Speed (mph)": 135,
          "Horsepower (hp)": 203,
          "0-60 mph (seconds)": 7.4
        },
        {
          "Rank": 2,
          "Brand": "Honda",
          "Car Name": "Accord",
          "Country": "Japan",
          "Year": 2024,
          "Top Speed (mph)": 140,
          "Horsepower (hp)": 192,
          "0-60 mph (seconds)": 7.1
        },
        {
          "Rank": 3,
          "Brand": "Nissan",
          "Car Name": "Altima",
          "Country": "Japan",
          "Year": 2023,
          "Top Speed (mph)": 130,
          "Horsepower (hp)": 188,
          "0-60 mph (seconds)": 7.6
        },
        {
          "Rank": 4,
          "Brand": "Subaru",
          "Car Name": "Outback",
          "Country": "Japan",
          "Year": 2024,
          "Top Speed (mph)": 130,
          "Horsepower (hp)": 182,
          "0-60 mph (seconds)": 7.1
        },
        {
          "Rank": 5,
          "Brand": "Mazda",
          "Car Name": "Mazda6",
          "Country": "Japan",
          "Year": 2023,
          "Top Speed (mph)": 140,
          "Horsepower (hp)": 227,
          "0-60 mph (seconds)": 6.4
        }
      ]

      btnJap.addEventListener('click', function() {
        showData(tableData8)
    });

    // UK

    const tableData9 = [
        {
          "Rank": 1,
          "Brand": "Aston Martin",
          "Car Name": "DBS Superleggera",
          "Country": "United Kingdom",
          "Year": 2023,
          "Top Speed (mph)": 211,
          "Horsepower (hp)": 715,
          "0-60 mph (seconds)": 3.4
        },
        {
          "Rank": 2,
          "Brand": "Jaguar",
          "Car Name": "F-Type",
          "Country": "United Kingdom",
          "Year": 2024,
          "Top Speed (mph)": 186,
          "Horsepower (hp)": 575,
          "0-60 mph (seconds)": 3.5
        },
        {
          "Rank": 3,
          "Brand": "Bentley",
          "Car Name": "Continental GT",
          "Country": "United Kingdom",
          "Year": 2023,
          "Top Speed (mph)": 207,
          "Horsepower (hp)": 626,
          "0-60 mph (seconds)": 3.4
        },
        {
          "Rank": 4,
          "Brand": "Rolls-Royce",
          "Car Name": "Phantom",
          "Country": "United Kingdom",
          "Year": 2022,
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 563,
          "0-60 mph (seconds)": 5.1
        },
        {
          "Rank": 5,
          "Brand": "McLaren",
          "Car Name": "Speedtail",
          "Country": "United Kingdom",
          "Year": 2020,
          "Top Speed (mph)": 250,
          "Horsepower (hp)": 1035,
          "0-60 mph (seconds)": 2.9
        }
      ]

      btnUk.addEventListener('click', function() {
        showData(tableData9)
    });

    // Italy

    const tableData10 = [
        {
          "Rank": 1,
          "Brand": "Ferrari",
          "Car Name": "SF90 Stradale",
          "Country": "Italy",
          "Year": 2019,
          "Top Speed (mph)": 211,
          "Horsepower (hp)": 986,
          "0-60 mph (seconds)": 2.5
        },
        {
          "Rank": 2,
          "Brand": "Lamborghini",
          "Car Name": "Aventador SVJ",
          "Country": "Italy",
          "Year": 2020,
          "Top Speed (mph)": 217,
          "Horsepower (hp)": 759,
          "0-60 mph (seconds)": 2.8
        },
        {
          "Rank": 3,
          "Brand": "Maserati",
          "Car Name": "MC20",
          "Country": "Italy",
          "Year": 2023,
          "Top Speed (mph)": 202,
          "Horsepower (hp)": 621,
          "0-60 mph (seconds)": 2.9
        },
        {
          "Rank": 4,
          "Brand": "Alfa Romeo",
          "Car Name": "Giulia Quadrifoglio",
          "Country": "Italy",
          "Year": 2023,
          "Top Speed (mph)": 191,
          "Horsepower (hp)": 505,
          "0-60 mph (seconds)": 3.6
        },
        {
          "Rank": 5,
          "Brand": "Pagani",
          "Car Name": "Huayra BC",
          "Country": "Italy",
          "Year": 2022,
          "Top Speed (mph)": 238,
          "Horsepower (hp)": 791,
          "0-60 mph (seconds)": 2.8
        }
      ]

      btnItaly.addEventListener('click', function() {
        showData(tableData10)
    });

    // Sweden

    const tableData11 = [
        {
          "Rank": 1,
          "Brand": "Volvo",
          "Car Name": "XC90",
          "Country": "Sweden",
          "Year": 2023,
          "Top Speed (mph)": 140,
          "Horsepower (hp)": 316,
          "0-60 mph (seconds)": 6.1
        },
        {
          "Rank": 2,
          "Brand": "Koenigsegg",
          "Car Name": "Jesko Absolut",
          "Country": "Sweden",
          "Year": 2022,
          "Top Speed (mph)": 330,
          "Horsepower (hp)": 1600,
          "0-60 mph (seconds)": 2.8
        },
        {
          "Rank": 3,
          "Brand": "Polestar",
          "Car Name": "Polestar 1",
          "Country": "Sweden",
          "Year": 2023,
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 619,
          "0-60 mph (seconds)": 4.2
        },
        {
          "Rank": 4,
          "Brand": "Saab",
          "Car Name": "9-5 Aero",
          "Country": "Sweden",
          "Year": 2022,
          "Top Speed (mph)": 155,
          "Horsepower (hp)": 335,
          "0-60 mph (seconds)": 5.6
        },
        {
          "Rank": 5,
          "Brand": "Koenigsegg",
          "Car Name": "Regera",
          "Country": "Sweden",
          "Year": 2021,
          "Top Speed (mph)": 255,
          "Horsepower (hp)": 1500,
          "0-60 mph (seconds)": 2.8
        }
      ]

      btnSwed.addEventListener('click', function() {
        showData(tableData11)
    });

    // Most HP

    const tableData12 = [
        {
          "Rank": 1,
          "Brand": "Koenigsegg",
          "Car Name": "Jesko Absolut",
          "Country": "Sweden",
          "Year": 2022,
          "Top Speed (mph)": 330,
          "Horsepower (hp)": 1600,
          "0-60 mph (seconds)": 2.8
        },
        {
          "Rank": 2,
          "Brand": "Bugatti",
          "Car Name": "Chiron Super Sport 300+",
          "Country": "France",
          "Year": 2019,
          "Top Speed (mph)": 304,
          "Horsepower (hp)": 1578,
          "0-60 mph (seconds)": 2.3
        },
        {
          "Rank": 3,
          "Brand": "Bugatti",
          "Car Name": "Centodieci",
          "Country": "France",
          "Year": 2020,
          "Top Speed (mph)": 236,
          "Horsepower (hp)": 1600,
          "0-60 mph (seconds)": 2.4
        },
        {
          "Rank": 4,
          "Brand": "Hennessey",
          "Car Name": "Venom F5",
          "Country": "United States",
          "Year": 2021,
          "Top Speed (mph)": 311,
          "Horsepower (hp)": 1817,
          "0-60 mph (seconds)": 2.6
        },
        {
          "Rank": 5,
          "Brand": "Rimac",
          "Car Name": "Nevera",
          "Country": "Croatia",
          "Year": 2021,
          "Top Speed (mph)": 258,
          "Horsepower (hp)": 1914,
          "0-60 mph (seconds)": 1.85
        }
      ]      

      btnHp.addEventListener('click', function() {
        showData(tableData12)
    });

    // 0-60mph

    const tableData13 = [
        {
          "Rank": 1,
          "Brand": "Rimac",
          "Car Name": "Nevera",
          "Country": "Croatia",
          "Year": 2021,
          "Top Speed (mph)": 258,
          "Horsepower (hp)": 1914,
          "0-60 mph (seconds)": 1.85
        },
        {
          "Rank": 2,
          "Brand": "Tesla",
          "Car Name": "Model S Plaid",
          "Country": "United States",
          "Year": 2022,
          "Top Speed (mph)": 200,
          "Horsepower (hp)": 1020,
          "0-60 mph (seconds)": 1.98
        },
        {
          "Rank": 3,
          "Brand": "Bugatti",
          "Car Name": "Chiron Super Sport 300+",
          "Country": "France",
          "Year": 2019,
          "Top Speed (mph)": 304,
          "Horsepower (hp)": 1578,
          "0-60 mph (seconds)": 2.3
        },
        {
          "Rank": 4,
          "Brand": "Rimac",
          "Car Name": "C_Two",
          "Country": "Croatia",
          "Year": 2021,
          "Top Speed (mph)": 258,
          "Horsepower (hp)": 1888,
          "0-60 mph (seconds)": 1.85
        },
        {
          "Rank": 5,
          "Brand": "Porsche",
          "Car Name": "911 Turbo S",
          "Country": "Germany",
          "Year": 2021,
          "Top Speed (mph)": 205,
          "Horsepower (hp)": 640,
          "0-60 mph (seconds)": 2.2
        }
      ]

      btnSixty.addEventListener('click', function() {
        showData(tableData13)
    });

    // Electric

    const tableData14 = [
        {
          "Rank": 1,
          "Brand": "Rimac",
          "Car Name": "Nevera",
          "Country": "Croatia",
          "Year": 2021,
          "Top Speed (mph)": 258,
          "Horsepower (hp)": 1914,
          "0-60 mph (seconds)": 1.85
        },
        {
          "Rank": 2,
          "Brand": "Tesla",
          "Car Name": "Model S Plaid",
          "Country": "United States",
          "Year": 2022,
          "Top Speed (mph)": 200,
          "Horsepower (hp)": 1020,
          "0-60 mph (seconds)": 1.98
        },
        {
          "Rank": 3,
          "Brand": "Rimac",
          "Car Name": "C_Two",
          "Country": "Croatia",
          "Year": 2021,
          "Top Speed (mph)": 258,
          "Horsepower (hp)": 1888,
          "0-60 mph (seconds)": 1.85
        },
        {
          "Rank": 4,
          "Brand": "Porsche",
          "Car Name": "Taycan Turbo S",
          "Country": "Germany",
          "Year": 2021,
          "Top Speed (mph)": 161,
          "Horsepower (hp)": 750,
          "0-60 mph (seconds)": 2.4
        },
        {
          "Rank": 5,
          "Brand": "Lucid",
          "Car Name": "Air Dream Edition",
          "Country": "United States",
          "Year": 2021,
          "Top Speed (mph)": 168,
          "Horsepower (hp)": 1080,
          "0-60 mph (seconds)": 2.5
        }
      ]

      btnElect.addEventListener('click', function() {
        showData(tableData14)
    });

    // Trucks

    const tableData15 = [
        {
          "Rank": 1,
          "Brand": "Ford",
          "Car Name": "F-150",
          "Country": "United States",
          "Year": 2023,
          "Top Speed (mph)": 120,
          "Horsepower (hp)": 430,
          "0-60 mph (seconds)": 5.9
        },
        {
          "Rank": 2,
          "Brand": "Chevrolet",
          "Car Name": "Silverado 1500",
          "Country": "United States",
          "Year": 2023,
          "Top Speed (mph)": 140,
          "Horsepower (hp)": 420,
          "0-60 mph (seconds)": 6.2
        },
        {
          "Rank": 3,
          "Brand": "Ram",
          "Car Name": "1500",
          "Country": "United States",
          "Year": 2023,
          "Top Speed (mph)": 120,
          "Horsepower (hp)": 395,
          "0-60 mph (seconds)": 6.5
        },
        {
          "Rank": 4,
          "Brand": "Toyota",
          "Car Name": "Tacoma",
          "Country": "Japan",
          "Year": 2023,
          "Top Speed (mph)": 115,
          "Horsepower (hp)": 278,
          "0-60 mph (seconds)": 7.7
        },
        {
          "Rank": 5,
          "Brand": "GMC",
          "Car Name": "Sierra 1500",
          "Country": "United States",
          "Year": 2023,
          "Top Speed (mph)": 140,
          "Horsepower (hp)": 355,
          "0-60 mph (seconds)": 6.8
        }
      ]

      btnTruck.addEventListener('click', function() {
        showData(tableData15)
    });

});


const navCartypes = document.getElementById('navCartypes')
const cartypes = document.getElementById('cartypes')

navCartypes.addEventListener('click', () => {
    if (cartypes.style.display === 'flex') {
        cartypes.style.display = 'none'
    } 
    else {
        cartypes.style.display = 'flex'
    }
})
