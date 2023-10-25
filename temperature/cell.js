document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convert');
    const celsiusInput = document.getElementById('celsius');
    const resultElement = document.getElementById('result');

    convertButton.addEventListener('click', function() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultElement.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultElement.textContent = 'Please enter a valid temperature in Celsius.';
        }
    });
});
