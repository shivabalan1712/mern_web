function fn(x:unknown):unknown;
function fn(x:number[]):number;
function fn(x:any){
    return x;
}

console.log(fn([1,2,3]));