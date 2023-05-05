function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  
  background(estrada);
  mostraPersonagem();
  movimentopersonagem();
  mostraCarros();
  movimentoCarros();
  //loopcarros();
  passoutela();
  loops();
  verificaColisao();
  placar();
  pontos();
  
  
  
  
  
}



