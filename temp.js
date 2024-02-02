function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusInput = document.getElementById("celsius");
    var resultElement = document.getElementById("result");

    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    var celsiusValue = (fahrenheitValue - 32) * (5/9);

    celsiusInput.value = celsiusValue.toFixed(2);
    resultElement.textContent = `${fahrenheitValue} Fahrenheit is ${celsiusValue.toFixed(2)} Celsius.`;
}

function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultElement = document.getElementById("result");

    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = (celsiusValue * (9/5)) + 32;

    fahrenheitInput.value = fahrenheitValue.toFixed(2);
    resultElement.textContent = `${celsiusValue} Celsius is ${fahrenheitValue.toFixed(2)} Fahrenheit.`;
}