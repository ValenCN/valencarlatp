let distancia;
let pantalla;
let texto1;
let texto = [];
let img = [];
let fuenteTitulo;
let fuenteBoton;
let fuenteTexto;

function preload() {
  // ====================== IMAGENES FONDO ==========================
  for (let i=0; i<5; i++) {
    img[i] = loadImage("./data/imagenes/imagen_"+ nf(i, 2) +".jpg");
  }
  // ========================== TEXTOS ==============================

  for (let i=0; i<10; i++) {
    texto[i] = loadStrings("data/textos/texto_"+ nf(i, 2) +".txt");
  }

  fuenteTitulo = loadFont("data/fuentes/Beardsons-normal.ttf");
  fuenteBoton = loadFont("data/fuentes/catcafe.medium.ttf");
  fuenteTexto = loadFont("data/fuentes/Credit_valley_bold.otf");
}

function setup() {
  createCanvas(640, 480);
  pantalla = 0;
}
function draw() {
  background(200);
  // ========================= PANTALLAS ==========================
  if (pantalla === 0) {
    pantallaInicio();
  } else if (pantalla == 1) {
    pantalla1();
  } else if (pantalla == 2) {
    pantalla2();
  } else if (pantalla == 3) {
    background(0);
  } else if (pantalla == 4) {
    background(0, 100, 230);
  }
}


// ======= INTERACCIÓN BOTONES ========================================
function mousePressed() {
  if (pantalla === 0) {
    if (colisionRectangular(width/2, height/2+165, 130, 55)) {
      pantalla = 1; // pasa a pantalla 1
    }
  } else if (pantalla == 1) {
    if (colisionRectangular (530, height/2+165, 130, 55))
    pantalla = 2;
  } else if (pantalla == 2) {
    if (colisionRectangular(130, 400, 180, 40)) {
      pantalla = 3;
    }
    if (colisionRectangular(520, 400, 150, 40)) {
      pantalla = 4;
    }
  } else if (pantalla == 3) {

  } else if (pantalla == 4) {

  }
}
