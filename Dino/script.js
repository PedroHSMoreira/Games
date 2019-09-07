let barHeight,
    barWidth,
    ballPosX,
    ballPosY,
    ballVelocity,
    jump,
    collision

function init() {

    barHeight = 50
    barWidth = 90
    ballPosX = 13
    ballPosY = canvas.height - 10
    ballVelocity = 5
    jump = 60
    collision = false

    canvas = document.querySelector('#canvas')
    ctx = canvas.getContext('2d')

    document.addEventListener('keydown', keyDown)


    setInterval(gameLoop, 30)
}

function keyDown(ev) {
    if (ev.keyCode === 38 || ev.keyCode == 32) {
        ballPosY  -= (100 * 0.7)
        console.log(ballPosY)
        
    }
    setTimeout(() => {
        ballPosY = canvas.height - 10
    }, 500);

}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    renderBall()

    if (ballPosY >= (canvas.height - barHeight) && ballPosX == 303 && collision == false) {
        collision = true
    }
    //console.log(ballPosX, canvas.height - barHeight, ballPosY)
    ctx.fillRect(canvas.width / 2, canvas.height - barHeight, 10, barHeight)
}

function renderBall() {
    ctx.beginPath()
    ctx.arc(ballPosX, ballPosY, 10, 0, Math.PI * 2, true)
    ctx.fill()
    if (collision === false) {
        ballPosX += ballVelocity
    }

    if (ballPosX > canvas.width) {
        ballPosX = 13
    }

}