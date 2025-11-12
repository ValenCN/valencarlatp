class enemigo {
    constructor(x, y, juego){
        this.juego = juego;
        this.posX = x;
        this.posY = y;
        this.alto = juego.cellSize * 0.90;
        this.ancho = juego.cellSize * 0.90;
        this.vel = 5.5;
        this.miColor = color (255,0,0);
        this.vida = 1;
        this.dir = 0; // Dirección 
        this.contadorTrabado = 0;
    }

        dibujar(){
        push();
        fill(this.miColor);
        rect(this.posX, this.posY, this.alto, this.ancho);
        pop();
    }
    
    seguir(xDestino, yDestino) {

        // CALCULAR DIRECCIÓN HACIA EL PERSONAJE
        this.dir = atan2(yDestino - this.posY, xDestino - this.posX);
    }
    
    mover() {
        // CALCULAR NUEVA POSICIÓN =====================================================
        let newX = this.posX + cos(this.dir) * this.vel;
        let newY = this.posY + sin(this.dir) * this.vel;
        
        // DETECTAR CHOQUES =================================================================
        // COLISIÓN EN X
        let chocarX = false;
        for (let y = 0; y < this.juego.map.length; y++) {
            for (let x = 0; x < this.juego.map[y].length; x++) {
                if (this.juego.map[y][x] === 1) {
                    let paredX = x * this.juego.cellSize;
                    let paredY = y * this.juego.cellSize;
                    if (newX < paredX + this.juego.cellSize &&
                        newX + this.ancho > paredX &&
                        this.posY < paredY + this.juego.cellSize &&
                        this.posY + this.alto > paredY) {
                        chocarX = true;
                    }
                }
            }
        }
        
        // COLISIÓN EN Y
        let chocarY = false;
        for (let y = 0; y < this.juego.map.length; y++) {
            for (let x = 0; x < this.juego.map[y].length; x++) {
                if (this.juego.map[y][x] === 1) {
                    let paredX = x * this.juego.cellSize;
                    let paredY = y * this.juego.cellSize;
                    if (this.posX < paredX + this.juego.cellSize &&
                        this.posX + this.ancho > paredX &&
                        newY < paredY + this.juego.cellSize &&
                        newY + this.alto > paredY) {
                        chocarY = true;
                    }
                }
            }
        }
        
        // 
        if (chocarX && chocarY) {
            this.contadorTrabado++;
            if (this.contadorTrabado > 10) {
                this.dir += PI / 2;
                this.contadorTrabado = 0;
            }
        }
        else {
            this.contadorTrabado = 0;
        }

        if (chocarX && !chocarY) {
            this.posY = newY;
        }
        else if (chocarY && !chocarX) {
            this.posX = newX;
        }
        else if (!chocarX && !chocarY) {
            this.posX = newX;
            this.posY = newY;
        }
    }
}