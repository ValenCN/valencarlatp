class personaje {
    constructor(){
        this.posX = cellSize;
        this.posY = cellSize;
        this.alto = cellSize * 0.90;
        this.ancho = cellSize * 0.90;
        this.vel = 3;
        this.miColor = color (0,0,255);
        this.vida = 1;
        this.espejo = new espejo();
    }
    dibujar(){
        push();
        fill(this.miColor);
        rect(this.posX, this.posY, this.alto, this.ancho);
        pop();
    }
    
mover() {
    let newX = this.posX;
    let newY = this.posY;

    // Detectar teclas
    if (keyIsDown('A'.charCodeAt(0))) newX -= this.vel;
    if (keyIsDown('D'.charCodeAt(0))) newX += this.vel;
    if (keyIsDown('W'.charCodeAt(0))) newY -= this.vel;
    if (keyIsDown('S'.charCodeAt(0))) newY += this.vel;

// Colisión horizontal
let chocarX = false;
for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === 1) {
            let paredX = x * cellSize;
            let paredY = y * cellSize;
            if (newX < paredX + cellSize &&
                newX + this.ancho > paredX &&
                this.posY < paredY + cellSize &&
                this.posY + this.alto > paredY) {
                chocarX = true;
            }
        }
    }
}

// Colisión vertical
let chocarY = false;
for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === 1) {
            let paredX = x * cellSize;
            let paredY = y * cellSize;
            if (this.posX < paredX + cellSize &&
                this.posX + this.ancho > paredX &&
                newY < paredY + cellSize &&
                newY + this.alto > paredY) {
                chocarY = true;
            }
        }
    }
}

// Solo actualizar los ejes que no chocan
if (!chocarX) this.posX = newX;
if (!chocarY) this.posY = newY;
}
}