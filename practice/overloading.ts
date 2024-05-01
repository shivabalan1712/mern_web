function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:number|string,b:number|string):string|number
{
    let r=(a as number)+(b as number);
    return r ;
}

console.log(add(1,2));