class espejo {
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
        this.alto = cellSize * 0.60;
        this.ancho = cellSize * 0.60;
        this.miColor = color (0,255,0);
    }
    dibujar(){
        push();
        fill(this.miColor);
        rect(this.posX, this.posY, this.alto, this.ancho);
        pop();
    }
    desaparecer(){
    }
}
