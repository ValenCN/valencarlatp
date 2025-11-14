class enemigo {
    constructor(x, y, juego){
        this.juego = juego;
        this.posX = x;
        this.posY = y;
        this.alto = juego.cellSize * 0.90;
        this.ancho = juego.cellSize * 0.90;
        this.miColor = color (255,0,0);
        this.vida = 1;
        
        // SEGUIR EL RASTRO DEL PERSONAJE
        this.indicePosicion = 0; // Donde esta parado el enemigo
        this.retraso = 70; // Distancia entre posiciones
        this.contadorFrames = 0;
    }
    
    dibujar(){
        push();
        fill(this.miColor);
        rect(this.posX, this.posY, this.alto, this.ancho);
        pop();
    }
    
    seguirPersonaje(personaje) {
        // SE EMPIEZA A MOVER DESPUES DEL PERSONAJE
        if (personaje.historialPosiciones.length < this.retraso + 70) {
            return;
        }

        this.contadorFrames++;
        
        // AVANZA CADA UN FRAME
        if (this.contadorFrames >= 1) { // Cambbiar Velocidad
            this.contadorFrames = 0;
            
            // CALCULA LA POSICIÓN
            let posicionObjetivo = this.indicePosicion + this.retraso;
            if (posicionObjetivo < personaje.historialPosiciones.length) {
                let pos = personaje.historialPosiciones[posicionObjetivo];
                this.posX = pos.x;
                this.posY = pos.y;
                this.indicePosicion++;
            }
        }
    }
}