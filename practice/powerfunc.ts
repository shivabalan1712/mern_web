function power(base:number , exponent:number)
{
    let result =1;
    for(let i=0; i < exponent ;i++){
        result=result*base;
    }
    return result;
}

let result = power(10,2)
console.log(result)