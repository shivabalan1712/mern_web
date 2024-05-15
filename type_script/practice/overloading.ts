function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:number|string,b:number|string):number|string
{
    return a+b ;
}

console.log(add(1,2));
console.log("Ram","prasath");
