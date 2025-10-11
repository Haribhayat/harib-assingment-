<!DOCTYPE html>
<html>
<head>
  <title>Random Numbers with While Loop</title>
</head>
<body>
  <h2>Random Numbers Generator</h2>
  <p id="output"></p>

  <script>
    let i = 0; // counter variable
    let randomNumbers = ""; // to store the random numbers

    // while loop to print 10 random numbers
    while (i < 10) {
      let num = Math.floor(Math.random() * 100); // random number between 0–99
      randomNumbers += num + "<br>";
      i++;
    }

    // display the random numbers on the webpage
    document.getElementById("output").innerHTML = randomNumbers;
  </script>
</body>
</html>