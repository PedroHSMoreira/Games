let barHeight, 
barWidth, 
playerPosx, 
playerVelocity, 
ballDiameter, 
ballPosX, 
ballPosY, 
ballVelocity, 
points, 
collision

function init() {
    playerVelocity = 20 // Quantidade de pixel que o jogador vai andar
    barHeight = 15 // Altura da barra
    barWidth = 90 // Largura da barra
    ballDiameter = 10 // Diametro da bola
    ballPosX = canvas.width / 2 // Centralizar a bola
    ballPosY = -10 // Negativo para a bola não aparecer no canvas (inicialmente)
    ballVelocity = 10 // Velocidade da bola
    points = 0 // Pontos do jogador
    collision = false

    canvas = document.querySelector('#canvas')
    context = canvas.getContext('2d')

    playerPosx = (canvas.width - barWidth) / 2



    document.addEventListener('keydown', keyDown)

    setInterval(gameLoop, 30) // Renderização do jogo a cada 30 segundos
}

// Pegando o click das teclas

function keyDown(ev) {
    if (ev.keyCode === 37) { // Caso mova para esquerda
        if (playerPosx > 0) { // Verificando se não esta fora da tela
            playerPosx -= playerVelocity
        }
    } else if (ev.keyCode === 39) { // Caso mova para direita
        if (playerPosx < (canvas.width - barWidth)) {
            playerPosx += playerVelocity
        }
    }

}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height) // Limpa os pixels que está a barra para nova renderização

    

    renderBall()

    if((ballPosX > playerPosx && ballPosX < playerPosx + barWidth) && ballPosY >= canvas.height - barHeight && collision == false) {
        points++
        collision = true
    }

    context.font = '32pt Tahoma'
    context.fillText(points, canvas.width - 70, 50)

    context.fillRect(playerPosx, canvas.height - barHeight, barWidth, barHeight) // Renderizando a barra
}

function renderBall() {
    context.beginPath()
    context.arc(ballPosX, ballPosY, ballDiameter, 0, Math.PI * 2, true) // Renderiza a bola 
    context.fill() // stroke() faz a bola outline

    if (ballPosY <= canvas.height) {
        ballPosY += ballVelocity 
    } else {
        ballPosX = Math.random() * canvas.width
        ballPosY = -10
        collision = false
    }
   
}