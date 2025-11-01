class juego {
    constructor(cantidadObjetos){
        this.cantidadObjetos = cantidadObjetos;
        this.crearPersonaje();
        this.crearEnemigo();
        this.crearObjeto();
        this.espejo = [];
        for (let i=0; i<9;i++){
            this.espejo[i] = new espejo();
        }
    }
    dibujar(){
        push();
        // MAPA ==================================================
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                if (map[y][x] === 1) {
                    fill (100); }
                    else {
                        fill (200); }
                        noStroke();
                        rect (x * cellSize, y * cellSize, cellSize, cellSize);
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
    iniciar(){
    }
    crearPersonaje(){
        this.personaje = new personaje();
    }
    crearEnemigo(){
        this.enemigo = new enemigo(12 * cellSize,6 * cellSize);
    }
    crearObjeto(){
        for (let i=0; i<this.cantidadObjetos;i++){
            this.espejo[i] = new espejo(i * 20, 100); 
        }
    }
    ganaste(){
    }
    perdiste(){
    }
}