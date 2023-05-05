let estrada;
let personagem;
let carro1;
let carro2;
let carro3;
let carro4;
let carro5;
let trilha;
//let luara;



function preload(){
  colisaosom = loadSound ("Musicas/raquetada.mp3");
  pontopositivo = loadSound ("Musicas/ponto.mp3");
  trilha = loadSound ("Musicas/trilha.mp3");
  estrada = loadImage("imagens/estrada.png");
  personagem = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carro4 = loadImage("imagens/carro-1.png");
  carro5 = loadImage("imagens/carro-2.png");
  carro6 = loadImage("imagens/carro-3.png");
  //luara = loadImage("imagens/luara.png");
  
  
  
  imagemCarros = [carro1, carro2, carro3, carro4, carro5, carro6];
  
}

