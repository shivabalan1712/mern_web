// Currency conversion function
function convertCurrency(amount: number, sourceCurrency: string, targetCurrency: string): number {
    // For simplicity, let's assume a fixed conversion rate for demonstration purposes
    // In a real-world application, you would fetch live conversion rates from an API
    const conversionRates: Record<string, Record<string, number>> = {
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
        throw new Error(`Conversion rate not available for ${sourceCurrency} to ${targetCurrency}`);
    }

    const rate = conversionRates[sourceCurrency][targetCurrency];
    return amount * rate;
}

// HTML interface
document.getElementById("convertBtn")?.addEventListener("click", function () {
    const amountInput = document.getElementById("amount") as HTMLInputElement;
    const sourceCurrencyInput = document.getElementById("sourceCurrency") as HTMLSelectElement;
    const targetCurrencyInput = document.getElementById("targetCurrency") as HTMLSelectElement;
    const resultDisplay = document.getElementById("result") as HTMLDivElement;

    const amount = parseFloat(amountInput.value);
    const sourceCurrency = sourceCurrencyInput.value;
    const targetCurrency = targetCurrencyInput.value;

    try {
        const convertedAmount = convertCurrency(amount, sourceCurrency, targetCurrency);
        resultDisplay.innerText = `${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
    } catch (error: any) {
        resultDisplay.innerText = `Error: ${error.message}`;
    }
    
    
});