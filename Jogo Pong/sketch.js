//bola//
let xBola = 300;
let yBola = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bola//
let velocidadeXBola= 6;
let velocidadeYBola = 6;

//raquete casa//
let xRaquete = 2;
let yRaquete = 160;
let larguraRaquete = 10
let alturaRaquete = 70
let colisao = false
let colisaoM = false


// raquete máquina //
let xRaqueteM = 588;
let yRaqueteM = 160;
let largRaqueteM = 10;
let altRaqueteM = 70;
let velYRaqueteM 
let chancedeerro = 0;
//PLACAR//
let meuspontos = 0
let pontosmaquina = 0
//SONS//
let raquetada;
let ponto;
let trilhasonora;


function preload(){
  
  trilhasonora = loadSound("trilha.mp3");
  raquetada = loadSound ("raquetada.mp3");
  ponto = loadSound ("ponto.mp3") ;   
}

function setup() {
  createCanvas(600,400);
  trilhasonora.loop();
  
  
}


function draw() {
  background(0);
  imagem();
  movimentoBola();
  mostraRaquetes();
  movimentoRaquete();
  colisaoR();
  movimentoRaqueteM();
  placar();
  probabilidadeerro();
  
  
  
  
  
  
 
 
  
}
//imagem//
function imagem(){
  //Bola//
  circle(xBola, yBola,diametro);
   
}
//movimento da bola//

function movimentoBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
  
  if (xBola + raio > width ||
      xBola - raio < 0){ 
    velocidadeXBola *=-1;
  }
      
  if (yBola + raio > height || 
      yBola - raio < 0){
      velocidadeYBola *=-1;
  }
 
      
}

//colisaoraquete//
function colisaoR(){
  colisao =     collideRectCircle(xRaquete,yRaquete,larguraRaquete,alturaRaquete,xBola,yBola,raio);

    if(colisao){
       velocidadeXBola *= -1;    
      raquetada.play();
       
    }
  colisaoM =      collideRectCircle(xRaqueteM,yRaqueteM,largRaqueteM,altRaqueteM,xBola,yBola,raio);
    if(colisaoM){
       velocidadeXBola *= -1;
      raquetada.play();
      
}
}
       
// Mostra as Raquetes//
function mostraRaquetes(){
  
  rect(xRaquete,yRaquete,larguraRaquete,alturaRaquete);  
  rect(xRaqueteM,yRaqueteM,largRaqueteM,altRaqueteM);
}

function movimentoRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  }

function movimentoRaqueteM(){
  
  //if (keyIsDown(87)){yRaqueteM -= 10;      
  //if (keyIsDown(83)){ yRaqueteM += 10;}
          
      
   velYRaqueteM = yBola - yRaqueteM - altRaqueteM / 2 - 50;
   yRaqueteM += velYRaqueteM + chancedeerro ;
}
function placar(){
  stroke(255);
  textSize (20);
  textAlign(CENTER);
  fill(color(255,166,9))
  rect(125,10,50,25)
  rect(425,10,50,25)
  fill (255)
  text (meuspontos, 150, 30)
  text (pontosmaquina, 450, 30)
  if (xBola - raio > 588){
      
    meuspontos += 1;
    ponto.play();
          
      }
  if (xBola - raio < 0) {
    
    pontosmaquina +=1;
    ponto.play();
    
  }
  
  
  
}

function probabilidadeerro(){
  
  if (meuspontos <= pontosmaquina){
      
      chancedeerro += 1;
  }
  if (chancedeerro >= 39){
    
    chancedeerro = 40;
  }
  
  else {
    chancedeerro -= 1;
    if (chancedeerro <= 35) {
      
      chancedeerro = 35;
      
    }
    
    
  }
}
     
      
  
