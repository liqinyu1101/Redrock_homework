function getSum(){
    let sum = 0;
    for(var i =0;i<arguments.length;i++)
    {
    if(!isNaN(arguments[i]))
    {sum += arguments[i]}
    }
    return sum;
}
console.log(getSum(2,1))