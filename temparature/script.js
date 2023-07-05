function convert() {
    var celsiusInput = document.getElementById("celsius-input");
    var result = document.getElementById("result");
  
    // Check if the input value is empty
    if (celsiusInput.value === "") {
      result.innerHTML = "Please enter a value.";
      return;
    }
  
    // Convert Celsius to Fahrenheit
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
  
    result.innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
  }