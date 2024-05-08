"use strict";

function convert() {
    var base = document.getElementById("BaseCurrency").value;
    var to = document.getElementById("ToCurrency").value;
    var val = parseInt(document.getElementById("value").value);
    var url = `https://api.exchangerate-api.com/v4/latest/${base}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var exchangeRate = response.rates[to] * val;
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `The value of ${val} ${base} is ${exchangeRate.toFixed(2)} ${to}`;
        }
    };
    xhr.send();
}
