function convert():void
{   var base:string=(document.getElementById("BaseCurrency") as HTMLInputElement).value;
    var to:string=(document.getElementById("ToCurrency") as HTMLInputElement).value;
    var val:number=parseInt((document.getElementById("value") as HTMLInputElement).value);
    var api:string="your api key here";
    var url:string=`https://api.freecurrencyapi.com/v1/latest?apikey=${api}&currencies=${to}&base_currency=${base}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response=JSON.parse(this.responseText);
            var exchangeRate=response.data[to]*val;
            alert(`The value of ${val} ${base} is ${exchangeRate} ${to}`);
        }
    }
    xhr.send();
}