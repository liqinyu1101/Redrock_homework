function Fibonacci(n){
    let a1=1,a2=1;
    for(let i = 2;i < n;i++)
    {[a1,a2]=[a2,a1+a2]}
    return a2
}
console.log(Fibonacci(1))