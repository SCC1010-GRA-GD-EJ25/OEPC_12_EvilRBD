let foto 
function preload() {
  // put preload code here
  foto = loadImage('./images/imagen.png');
}

function setup() {
  // put setup code here
  createCanvas(800,800);
  textFont("Stencil");
  textSize(32);
  textAlign(CENTER);
  textStyle(BOLD);
  noLoop();
}

function draw() {
  // put drawing code here
  background(255)
  //image(foto,0,0, 800, 800);
  let numPixels = foto.width * foto.height * 4; 
  foto.loadPixels();
  for (let i = 0; i < numPixels; i+=4) {
   foto.pixels[i] = 255 - foto.pixels[i]; // red
   foto.pixels[i+1] = 255 - foto.pixels[i+1]; // green 
    foto.pixels[i+2] = 255 - foto.pixels[i+2]; // blue
}
  foto.updatePixels();
  image(foto,0,0, 800, 800);
  fill('blue');
  text("EVIL RBD BE LIKE", width/2, 30);
  text("NO ME SALVES", width/2, 700);
}