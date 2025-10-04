function pantallaInicio() {
  push();
  image(img[0], 0, 0, width, height);
  textAlign(CENTER, CENTER);

  // TITULO ==========================================================
  fill (52, 108, 121);
  textFont(fuenteTitulo);
  textSize (70);
  text ("Ojos De Piedra", width/2, height/2-165);

  // BOTÓN CENTRO ====================================================
  botones("Empezar", width/2, height/2+165, 130, 55);
  pop();
}


function pantalla1() {
  push();
  image(img[1], 0, 0, width, height);

  // TEXTO =================================================
  textAlign(LEFT, TOP);
  fill(255);
  textFont(fuenteTexto);
  textSize(15);
  text(texto[0][0], 30, 50, width-60, height-50);
  textSize(17);
  text(texto[0][1], 30, 100, width-70, height-50);

  // BOTÓN DERECHA =============================================
  botones("Siguiente", 530, height/2+165, 130, 55);
  pop();
}

function pantalla2() {
  push();
  image(img[2], 0, 0, width, height);

  // TEXTO ===========================================================
  noStroke();
  fill(100, 60);
  rect(0, height * 0.64, width, height - 350);
  fill(255);
  textFont(fuenteTexto);
  textAlign(CENTER);
  textSize(17);
  text("Observas un jardín lleno de estatuas de personas en la entrada al templo, ¿Qué haces?", 0, height * 0.72, width, height * 0.3);
  
  // DIBUJAR BOTON ====================================================
  noStroke();
  fill(100, 60);
  rect(0, height * 0.64, width, height - 350);
  botones("Ignorar las estatuas y avanzar", 130, 400, 180, 40);
  botones("Inspeccionar el jardin", 520, 400, 150, 40);
  pop();
}
