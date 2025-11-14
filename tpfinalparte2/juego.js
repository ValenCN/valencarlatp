class juego {
    constructor(cantidadObjetos = 5){
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
        this.espejosRecogidos = 0;
        this.estado = 0;
        
        this.crearPersonaje();
        this.crearEnemigo();
        this.crearObjeto();

        // BOTONES
        this.botonJugar = new Boton("JUGAR", width/2, height/2 - 60, 180, 50);
        this.botonInstrucciones = new Boton("INSTRUCCIONES", width/2, height/2 + 10, 180, 50);
        this.botonCreditos = new Boton("CRÉDITOS", width/2, height/2 + 80, 180, 50);
        this.botonMusicaOff = new Boton("Musica: OFF", 50, 410, 80, 30);
        this.botonMusicaOn = new Boton("Musica: ON", 50, 450, 80, 30);
        this.botonVolver = new Boton("Volver",530, height/2+165, 130, 55);
        this.botonAInicio = new Boton("A Inicio", 50, 450, 80, 30);
    }


// PANTALLAS =====================================================================================================

    // PANTALLA DE INICIO
    dibujarPantallaInicio() {
        push();
        background(0, 200, 0);

        // Titulo
        textAlign(CENTER, CENTER);
        fill (52, 108, 121);
        textSize (70);
        text ("Ojos De Piedra", width/2, height/2-165);

        // Botones
        this.botonJugar.dibujar();
        this.botonInstrucciones.dibujar();
        this.botonCreditos.dibujar();

        textSize(12);
        this.botonMusicaOn.dibujar();
        this.botonMusicaOff.dibujar();
        pop();
    }
    
    // JUEGO
    iniciarJuego() {
        this.estado = 1;
        this.espejosRecogidos = 0;
        
        // Reiniciar espejos
        for (let i = 0; i < this.cantidadObjetos; i++) {
            this.espejo[i].activo = true;
        }
        
        // Reiniciar personaje
        this.personaje.posX = this.cellSize;
        this.personaje.posY = this.cellSize;
        this.personaje.historialPosiciones = [];
        
        // Reiniciar enemigo
        this.enemigo.posX = 12 * this.cellSize;
        this.enemigo.posY = 6 * this.cellSize;
        this.enemigo.indicePosicion = 0;
        this.enemigo.contadorFrames = 0;
    }

    // INSTRUCCIONES
    dibujarPantallaInstrucciones() {
        push();
        background(0, 150, 255);
        this.botonVolver.dibujar();
        textSize(12);
        this.botonMusicaOn.dibujar();
        this.botonMusicaOff.dibujar();

        fill(255);
        textSize(18);
        textAlign(LEFT);
        textAlign(CENTER);
        textSize(40);
        fill(87, 153, 180);
        text("Instrucciones", width / 2, height / 2 - 170);    

        fill(255);
        textSize(18);
        textAlign(LEFT);
        text("• Usa WASD para moverte", 50, 150);
        text("• Recoge todos los espejos para ganar", 50, 190);
        text("• Evita que el enemigo te atrape", 50, 230);
        pop();
    }

    // VICTORIA
    dibujarPantallaVictoria(){
        push();
        background(0, 150, 255);
        this.botonVolver.dibujar();
        this.botonMusicaOn.dibujar();
        this.botonMusicaOff.dibujar();

        fill(255, 215, 0);
        textSize(48);
        textAlign(CENTER, CENTER);
        text("¡GANASTE!", width * 0.5, height * 0.4);
    
        fill(255);
        textSize(15);
        text("Recogiste todos los espejos y convertiste a Medusa en piedra", width * 0.5, height * 0.55);
        pop();
    }

    dibujarPantallaDerrota() {
        push();
        background(0, 150, 255);
        this.botonVolver.dibujar();
        this.botonMusicaOn.dibujar();
        this.botonMusicaOff.dibujar();

        fill(255, 215, 0);
        textSize(48);
        textAlign(CENTER, CENTER);
        text("¡PERDISTE!", width * 0.5, height * 0.4);
    
        fill(255);
        textSize(15);
        text("Medusa te atrapó y te convirtió en piedra", width * 0.5, height * 0.55);
        pop();
    }

    // CREDITOS
    dibujarPantallaCreditos(){
        push();
        background(0, 150, 255);
        this.botonMusicaOn.dibujar();
        this.botonMusicaOff.dibujar();
        this.botonVolver.dibujar();

        fill(255);
        textSize(18);
        textAlign(LEFT);
        textAlign(CENTER);
        textSize(40);
        fill(87, 153, 180);
        text("Creditos", width / 2, height / 2 - 170);

        textSize(18);
        textAlign(LEFT);
        text("Obra: Ojos de Piedra", 50, 150);
        text("Alumnos: Carancini Valentina, Choquetopa Carla", 50, 190);
        text("PMIW Comisión 3", 50, 230);
        pop();

    }




// PRESIONAR BOTONES ==============================================================
    press() {
        if (this.estado == 0) {
        if (this.botonJugar.fueClickeado()) {
            this.iniciarJuego();
        } else if (this.botonInstrucciones.fueClickeado()) {
            this.estado = 4;
        } else if (this.botonCreditos.fueClickeado()) {
            this.estado = 5;
        }
    }

    else if (this.estado == 1) {
        // EN EL JUEGO
        if (this.botonAInicio.fueClickeado()) {
            this.estado = 0;
        }
    }

    else if (this.estado == 4 || this.estado == 5) {
        // INSTRUCCIONES / CREDITOS
        if (this.botonVolver.fueClickeado()) {
            this.estado = 0;
        }
    }
    else if (this.estado == 2 || this.estado == 3) {
        // VICTORIA / DERROTA
        if (this.botonVolver.fueClickeado()) {
            this.estado = 0;
        }
    }
}


    dibujar(){
        push();
        // MAPA 
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
        // PERSONAJE, ENEMIGO, OBJETO
        this.personaje.dibujar();
        this.enemigo.dibujar();
        for (let i = 0; i < this.cantidadObjetos; i++){
            if (this.espejo[i].activo) {
                this.espejo[i].dibujar();
            }
        }

        // CONTADOR
        fill(0);
        textSize(20);
        textAlign(RIGHT);
        text("Espejos: " + this.espejosRecogidos + "/" + this.cantidadObjetos, width-20, 25);
        pop();

        // BOTONES 
        textSize(12);
        this.botonAInicio.dibujar();

    }
    

    actualizar(){
        this.dibujar();
        if (this.estado==0) {
            this.dibujarPantallaInicio(); }

            else if (this.estado==1) {
                this.personaje.mover();
                this.enemigo.seguirPersonaje(this.personaje);
                this.evaluarColisiones();
                if (this.espejosRecogidos >= this.cantidadObjetos) {
                    this.ganaste();
                }
            }

        else if (this.estado==2){
            this.dibujarPantallaVictoria();
        }
        else if (this.estado==3){
            this.dibujarPantallaDerrota();
        }
        else if (this.estado==4){
            this.dibujarPantallaInstrucciones();
        }
        else if (this.estado==5){
            this.dibujarPantallaCreditos();
        }  
               
    }
    
    crearPersonaje(){
        this.personaje = new personaje(this);
    }
    
    crearEnemigo(){
        this.enemigo = new enemigo(12 * this.cellSize, 6 * this.cellSize, this);
    }
    
    crearObjeto(){
        // ARRAY PARA POSICIONAR OBJETOS EN EL MAPA
        let posicionesObjetos = [
            [4, 6], [5, 15], [8, 8], [11, 14], [13, 18]
        ];

        for (let i = 0; i < this.cantidadObjetos; i++) {
            if (i < posicionesObjetos.length) {
                let fila = posicionesObjetos[i][0];
                let columna = posicionesObjetos[i][1];
                
                let posX = columna * this.cellSize;
                let posY = fila * this.cellSize;
                
                this.espejo[i] = new espejo(this, posX, posY);
            }
        }
    }
    
    evaluarColisiones() {

        // COLISIÓN OBJETOS
        for (let i = 0; i < this.cantidadObjetos; i++) {
            let espejo = this.espejo[i];
            
            if (espejo.activo) {
                let distancia = dist(
                    this.personaje.posX + this.personaje.ancho/2,
                    this.personaje.posY + this.personaje.alto/2,
                    espejo.posX + espejo.ancho/2,
                    espejo.posY + espejo.alto/2
                );
                
                if (distancia < (this.personaje.ancho/2 + espejo.ancho/2)) {
                    espejo.activo = false;
                    this.espejosRecogidos++;
                }
            }
        }

        // COLISIÓN ENEMIGO
        let distanciaEnemigo = dist(
        this.personaje.posX + this.personaje.ancho/2,
        this.personaje.posY + this.personaje.alto/2,
        this.enemigo.posX + this.enemigo.ancho/2,
        this.enemigo.posY + this.enemigo.alto/2);
        
        if (distanciaEnemigo < (this.personaje.ancho/2 + this.enemigo.ancho/2)) {
            this.perdiste();
    }
}
    
    ganaste(){
        this.estado=2;
    }
    perdiste(){
        this.estado=3;
    }
}