const inputElement = document.getElementById('num');
const resultElement = document.getElementById('result');

inputElement.addEventListener('blur', () => {
    const inputValue = inputElement.value;
    const numbers = inputValue.split(',').map(num => parseFloat(num.trim()));
    const validNumbers = numbers.filter(num => !isNaN(num));
    if (validNumbers.length > 0) {
        const sum = validNumbers.reduce((numbers, num) => numbers + num, 0);
        const average = sum / validNumbers.length;
        resultElement.textContent = `Середнє арифметичне: ${average.toFixed(2)}`;
    } else {
        resultElement.textContent = 'Введіть числове значення';
    }
});
