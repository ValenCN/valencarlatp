let objJuego;

function setup() {
  createCanvas(640, 480);
  objJuego = new juego();
}

function draw(){
    objJuego.actualizar();
}

function mousePressed() {
    objJuego.press();
}