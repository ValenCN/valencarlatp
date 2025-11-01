class enemigo {
    constructor(x,y){
        this.posX = x;
        this.posY = y;
        this.alto = cellSize * 0.90;
        this.ancho = cellSize * 0.90;
        this.vel = 3;
        this.miColor = color (255,0,0);
        this.vida = 1;
    }
  
dibujar(){
        push();
        fill(this.miColor);
        rect(this.posX, this.posY, this.alto, this.ancho);
        pop();
    }
}
