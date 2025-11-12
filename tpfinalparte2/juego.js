class juego {
    constructor(cantidadObjetos = 5){
        // Mover cellSize y map aquí
        this.cellSize = 32;
        this.map = [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
          [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
          [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
          [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
          [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
          [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
          [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
          [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];
        
        this.cantidadObjetos = cantidadObjetos;
        this.espejo = [];
        
        this.crearPersonaje();
        this.crearEnemigo();
        this.crearObjeto();
    }
    
    dibujar(){
        push();
        // MAPA ==================================================
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.map[y][x] === 1) {
                    fill (100); 
                } else {
                    fill (200); 
                }
                noStroke();
                rect (x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
            }
        }
        // PERSONAJE, ENEMIGO, OBJETO ==========================================================
        this.personaje.dibujar();
        this.enemigo.dibujar();
        for (let i=0; i<this.cantidadObjetos;i++){
            this.espejo[i].dibujar();
        }
        pop();
    }
    
    actualizar(){
        this.personaje.mover();
        this.enemigo.seguir(this.personaje.posX, this.personaje.posY);
        this.enemigo.mover();
    }
    
    crearPersonaje(){
        this.personaje = new personaje(this);
    }
    
    crearEnemigo(){
        this.enemigo = new enemigo(12 * this.cellSize, 6 * this.cellSize, this);
    }
    
    crearObjeto(){
        for (let i=0; i<this.cantidadObjetos;i++){
            this.espejo[i] = new espejo(this, i * 20, 100); 
        }
    }
    
    ganaste(){
    }
    
    perdiste(){
    }
}