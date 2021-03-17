let save = () => {
    let sum = 0;
    return function (num = 0) {
        sum += num;
        return sum;
    }
}
let add = save()
//add=save(add)要传参进去？想不明白
add(100)
add(200)
console.log(add())