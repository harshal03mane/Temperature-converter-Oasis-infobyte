function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const result = document.getElementById('result');

    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      result.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
      fahrenheitInput.value = '';
      result.textContent = 'Please enter a valid temperature in °C';
    }
  }