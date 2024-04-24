var _a;
// Currency conversion function
function convertCurrency(amount, sourceCurrency, targetCurrency) {
    // For simplicity, let's assume a fixed conversion rate for demonstration purposes
    // In a real-world application, you would fetch live conversion rates from an API
    var conversionRates = {
        "USD": { "EUR": 0.85, "GBP": 0.73, "JPY": 109.92 }, // Example conversion rates
        "EUR": { "USD": 1.18, "GBP": 0.86, "JPY": 130.68 },
        "GBP": { "USD": 1.38, "EUR": 1.16, "JPY": 151.17 },
        "JPY": { "USD": 0.0091, "EUR": 0.0077, "GBP": 0.0066 }
        // Add more conversion rates as needed
    };
    if (sourceCurrency === targetCurrency) {
        return amount; // No conversion needed if source and target currencies are the same
    }
    if (!conversionRates[sourceCurrency] || !conversionRates[sourceCurrency][targetCurrency]) {
        throw new Error("Conversion rate not available for ".concat(sourceCurrency, " to ").concat(targetCurrency));
    }
    var rate = conversionRates[sourceCurrency][targetCurrency];
    return amount * rate;
}
// HTML interface
(_a = document.getElementById("convertBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var amountInput = document.getElementById("amount");
    var sourceCurrencyInput = document.getElementById("sourceCurrency");
    var targetCurrencyInput = document.getElementById("targetCurrency");
    var resultDisplay = document.getElementById("result");
    var amount = parseFloat(amountInput.value);
    var sourceCurrency = sourceCurrencyInput.value;
    var targetCurrency = targetCurrencyInput.value;
    try {
        var convertedAmount = convertCurrency(amount, sourceCurrency, targetCurrency);
        resultDisplay.innerText = "".concat(amount, " ").concat(sourceCurrency, " = ").concat(convertedAmount.toFixed(2), " ").concat(targetCurrency);
    }
    catch (error) {
        resultDisplay.innerText = "Error: ".concat(error.message);
    }
});
