function analyze() {
    // Get the selected column.
    var column = document.getElementById("column").value;
  
    // Read the CSV file.
    var csv = new XMLHttpRequest();
    csv.open("GET", "data.csv");
    csv.onload = function() {
      if (csv.status === 200) {
        // Parse the CSV data.
        var data = csv.responseText.split("\n");
  
        // Create a frequency table.
        var frequencyTable = {};
        for (var i = 0; i < data.length; i++) {
          var value = data[i].split(",")[column];
          if (frequencyTable[value] === undefined) {
            frequencyTable[value] = 0;
          }
          frequencyTable[value]++;
        }
  
        // Display the frequency table.
        document.getElementById("output").innerHTML = JSON.stringify(frequencyTable, null, 2);
      } else {
        console.log("Error reading CSV file.");
      }
    };
    csv.send();
  }
  