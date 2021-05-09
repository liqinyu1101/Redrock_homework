import "./css/lv1.css"

const ball1 = document.querySelector('.ball1')
const ball2 = document.querySelector('.ball2')
const ball3 = document.querySelector('.ball3')

function promiseMove(ball, dist) {
    return new Promise((resolve, reject) => {
        function move() {
            setTimeout(function () {
                let distance = 100;
                if (dist === distance) {
                    resolve();
                } else {
                    if (dist < distance) {
                        dist++;
                    }
                }
                ball.style.transform = 'translateX(' + dist + 'px)'
                move()
            }, 10)
        }
        move()
    })
}
promiseMove(ball1, dist1)
    .then(data => {
        return promiseMove(ball2, dist2)
    })
    .then(date => {
        return promiseMove(ball3, dist3)
    })