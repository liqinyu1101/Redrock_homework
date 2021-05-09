import "./css/lv1.css"

const ball1 = document.querySelector('.ball1')
const ball2 = document.querySelector('.ball2')
const ball3 = document.querySelector('.ball3')

let dist1 = document.defaultView.getComputedStyle(ball1, null).transform.split(',')[4]
let dist2 = document.defaultView.getComputedStyle(ball2, null).transform.split(',')[4]
let dist3 = document.defaultView.getComputedStyle(ball3, null).transform.split(',')[4]

function move1(ball, dist, cb) {
    setTimeout(function () {
        let distance = 100;
        if (dist === distance) {
            cb && cb()
            return;
        } else {
            if (dist < distance) {
                dist++;
            }
        }
        ball.style.transform = 'translateX(' + dist + 'px)'
        move(ball, dist, cb)
    }, 10)
}
move(ball1, dist1, function () {
    move(ball2, dist2, function () {
        move(ball3, dist3, function () {})
    })
})
console.log(dist1)