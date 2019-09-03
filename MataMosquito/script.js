//variáveis usadas
let height = 0
let width = 0
let life = 1
let timing = 10

let createFlyTime = 0
//criando a seleção de nivel 
let level = window.location.search
level = level.replace('?', '')

if (level === 'easy') {
    createFlyTime = 1500
} else if (level === 'medium') {
    createFlyTime = 1000
} else if (level === 'hard') {
    createFlyTime = 850
}

//função que pega a largura e a altura da página
function setPage() {
    height = window.innerHeight
    width = window.innerWidth
    //console.log(width, height)
}

setPage() //chamando a função
//função que exibe o tempo e reinicia o jogo (ganhando ou perdendo)
let setTiming = setInterval(function () {
    timing-- //decremetando o tempo

    if (timing < 0 ) { //caso consiga ganhar
        clearInterval(setTiming)
        clearInterval(createFly)
        window.location.href = 'win.html'
    } else {
        document.getElementById('time').innerHTML = timing //exibe o tempo dentro do span
    }
},1000)
//função para criar o elemento e gerar posições randômicas
function posRandom() {

    //removendo o mosquito (caso exista)
    if (document.getElementById('fly')) {
        document.getElementById('fly').remove()

        if (life > 3) { 
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('l' + life).src = 'assets/imagens/coracao_vazio.png'

            life++ 
        }
    }

    let posX = Math.floor(Math.random() * width) - 90 //gerando posições randomicas
    let posY = Math.floor(Math.random() * height) - 90
    //não passar as extremidades
    posX = posX < 0 ? 0 : posX //caso receba valores negativos e não sair da dimensão da página
    posY = posY < 0 ? 0 : posY

    console.log(posX, posY)
    //criar elemento html
    let fly = document.createElement('img')
    fly.src = 'assets/imagens/mosca.png'
    fly.className = sizeRandom() + ' ' + sideRandom()
    fly.style.right = posX + 'px'
    fly.style.top = posY + 'px'
    fly.style.position = 'absolute'
    fly.id = 'fly'
    fly.onclick = function () { //função para remover o mosquito com o click
        this.remove()
    }

    document.body.appendChild(fly) //criando filho dentro do body

}
//função que gera as 3 classes randomicamente
function sizeRandom() {
    let size = Math.floor(Math.random() * 3)

    switch (size) {
        case 0:
            return 'fly1'
        case 1:
            return 'fly2'
        case 2:
            return 'fly3'
    }
}
//função que gera o lado do mosquito randomicamente
function sideRandom() {
    let side = Math.floor(Math.random() * 2)

    switch (side) {
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
    }
}