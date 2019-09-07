class Dino {
    constructor (x, y, radius){
        this.x = x // Eixo X
        this.y = y // Eixo Y

        this.dinoPosY = 0 // Posição no eixo Y
        this.speed = 1 // Velocidade do Dino
        this.onGround = true // Flag para verificar se esta no chão

        this.radius = radius // Tamanho do Dino
    }

    update(platform) {
        let bottom = this.y + this.radius // Parte inferior do Dino
        let nextBottom = bottom + this.dinoPosY // Calcular a próximo frame 
        
    }
}