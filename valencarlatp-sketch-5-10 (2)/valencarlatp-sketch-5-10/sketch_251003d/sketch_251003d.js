let distancia;
let pantalla;
let texto = [];
let img = [];
let fuenteTitulo;
let fuenteBoton;
let fuenteTexto;

let opacidadPantalla3 = 0

  function preload() {
  for (let i = 0; i < 15; i++) {
    img[i] = loadImage("./data/imagenes/imagen_" + nf(i, 2) + ".jpg");
  }

  for (let i = 0; i < 9; i++) {
    texto[i] = loadStrings("data/textos/texto_" + nf(i, 2) + ".txt");
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
  if (pantalla === 0) {
    pantallaInicio();
  } else if (pantalla == 1) {
    pantalla1();
  } else if (pantalla == 2) {
    pantalla2();
  } else if (pantalla == 3) {
    pantalla3();
  } else if (pantalla == 4) {
    pantalla4();
  } else if (pantalla == 5) {
    pantalla5();
  } else if (pantalla == 6) {
    pantalla6();
  } else if (pantalla == 7) {
    pantalla7();
  } else if (pantalla == 8) {
    pantalla8();
  } else if (pantalla == 9) {
    pantalla9();
  } else if (pantalla == 10) {
    pantalla10();
  } else if (pantalla == 11) {
    pantalla11();
  } else if (pantalla == 12) {
    pantalla12();
  }else if (pantalla == 13) {
    pantalla13();
  }else if (pantalla == 14) {
    pantalla14();
  }else if (pantalla== 15) {
    pantalla15();
  }
}

function mousePressed() {
  if (pantalla === 0) {
    if (mouseRect(width/2, height/2+165, 130, 55)) {
      pantalla = 1;
    }
  } else if (pantalla == 1) {
    if (mouseRect(530, height/2+165, 130, 55))
      pantalla = 2;
  } else if (pantalla == 2) {
    if (mouseRect(130, 400, 180, 40)) {
      pantalla = 3;
    }
    if (mouseRect(520, 400, 150, 40)) {
      pantalla = 4;
    }
  } else if (pantalla == 3) {
    if (mouseRect(width/2, height/2+165, 130, 55))
      pantalla = 0;
  } else if (pantalla == 4) {
    if (mouseRect(width/2, height/2+165, 130, 55))
      pantalla =5;
  } else if (pantalla == 5) {
    if (mouseRect(width/2, height/2+165, 180, 40))
      pantalla = 6;
  } else if (pantalla == 6) {
    if (mouseRect(520, 400, 150, 40))
      pantalla = 7;
    if (mouseRect(130, 400, 180, 40))
      pantalla = 8;
  } else if (pantalla == 7) {
    if (mouseRect(width/2, height/2+165, 130, 55))
      pantalla = 0;
  } else if (pantalla == 8) {
    if (mouseRect (width/2, height/2+165, 180, 40))
    pantalla = 9;
   } else if (pantalla == 9) {
    if(mouseRect(width/2,height/2+165,200,45)) 
        pantalla = 10;
  } else if (pantalla == 10) {
 // BOTONES PANTALLA 10
    if(mouseRect(110, height-60, 200, 40)) {
      pantalla = 11; // Esconderse en el armario
    }
    if(mouseRect(width/2, height-60, 190, 40)) {
      pantalla = 12; // Enfrentarla con el espejo
    }
    if(mouseRect(520, height-60, 180, 40)) {
      pantalla = 13; // Escapas por el pasadizo
    }
  } else if (pantalla == 11) {
    if(mouseRect(width/2, height/2 + 165, 180, 40))
      pantalla = 0;
  } else if (pantalla == 12) {
    if(mouseRect(width/2,height/2 + 165,180,40))
    pantalla =0;    
    } else if (pantalla == 13) {
  if(mouseRect(width/2, height/2 + 165, 180, 40))
    pantalla = 14;
  } else if (pantalla == 14) {
   if(mouseRect(width/2, height/2 + 165, 180, 40))
    pantalla = 15;
  } else if(pantalla == 15) {
   if(mouseRect(width/2,height/2 + 165,180,40)) 
    pantalla = 0;
   
  }
} 
