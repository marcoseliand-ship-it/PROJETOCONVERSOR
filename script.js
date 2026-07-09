const convertButton = document.querySelector('.converter-button');
const inputField = document.querySelector('.currency-input');
const fromCurrencySelect = document.querySelectorAll('select')[0];
const toCurrencySelect = document.querySelectorAll('select')[1];
const sourceAmountElement = document.querySelector('.currency-value-to-convert');
const targetAmountElement = document.querySelector('.currency-value');
const currencyLabels = document.querySelectorAll('.currency');

const ratesToBrl = {
    BRL: 1,
    USD: 5.2,
    EUR: 5.5,
};

function formatCurrency(value, currency) {
    const formattedValue = value.toFixed(2).replace('.', ',');

    if (currency === 'USD') return `U$ ${formattedValue}`;
    if (currency === 'EUR') return `€ ${formattedValue}`;

    return `R$ ${formattedValue}`;
}

function getCurrencyName(currency) {
    if (currency === 'USD') return 'Dólar americano';
    if (currency === 'EUR') return 'Euro';
    return 'Real brasileiro';
}

function convertValue() {
    const inputValue = Number(inputField.value);

    if (Number.isNaN(inputValue) || inputValue <= 0) {
        sourceAmountElement.textContent = 'R$ 0,00';
        targetAmountElement.textContent = 'U$ 0,00';
        currencyLabels[0].textContent = 'Real brasileiro';
        currencyLabels[1].textContent = 'Dólar americano';
        return;
    }

    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    const amountInBrl = inputValue * ratesToBrl[fromCurrency];
    const convertedValue = amountInBrl / ratesToBrl[toCurrency];

    sourceAmountElement.textContent = formatCurrency(inputValue, fromCurrency);
    targetAmountElement.textContent = formatCurrency(convertedValue, toCurrency);
    currencyLabels[0].textContent = getCurrencyName(fromCurrency);
    currencyLabels[1].textContent = getCurrencyName(toCurrency);
}

convertButton.addEventListener('click', convertValue);

